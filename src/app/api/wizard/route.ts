import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

import type { Character } from '@/config/CharacterConfig';
import { createChatCompletion } from '@/lib/openai';

import { createCharacter } from './functions';
import { parseJSON } from './parseJSON';
import { basicCharacterPrompt } from './prompts';
import { allowedUsers } from './wizardWhitelist';

export const runtime = 'edge';

type GenerativeCharacterPayload = {
  name: string;
  backstory: string;
  level: number;
};

export const POST = async (req: NextRequest) => {
  const supabase = createRouteHandlerClient({ cookies });
  const { name, backstory, level } = (await req.json()) as GenerativeCharacterPayload;
  if (!name || !backstory) return NextResponse.json({ error: 'Missing name or backstory' }, { status: 400 });

  const { data } = await supabase.auth.getUser();
  const userEmail = data.user?.email;

  if (!allowedUsers.includes(userEmail?.toLowerCase() ?? '')) {
    return NextResponse.json({ error: 'User not allowed to use this feature' }, { status: 403 });
  }

  try {
    const response = await createChatCompletion({
      model: 'gpt-3.5-turbo',
      temperature: 0.8,
      function_call: { name: 'create_character' },
      functions: [createCharacter],
      messages: [
        { role: 'system', content: basicCharacterPrompt },
        { role: 'user', content: `Name: ${name} Level: ${level ?? 5} Backstory: ${backstory}` },
      ],
    });

    const functionCall = response.choices[0]?.message.function_call?.arguments;
    if (!functionCall) throw new Error('No function call returned from OpenAI');

    const responseData = parseJSON<Character>(functionCall);
    return NextResponse.json({ ...responseData, name, backstory });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: 'Error getting response from AI please try again later' }, { status: 500 });
  }
};
