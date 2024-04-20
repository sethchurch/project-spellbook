import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

import { openai } from '@/lib/openai';

import { createCharacter } from './functions';
import { basicCharacterPrompt } from './prompts';

export const runtime = 'edge';

type GenerativeCharacterPayload = {
  name: string;
  backstory: string;
  level: number;
};

const { AI_ALLOWED_USERS } = process.env;
const allowedUsers = AI_ALLOWED_USERS ? AI_ALLOWED_USERS.split(',') : [];

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
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      temperature: 0.8,
      function_call: { name: 'create_character' },
      functions: [createCharacter],
      stream: true,
      messages: [
        { role: 'system', content: basicCharacterPrompt },
        { role: 'user', content: `Name: ${name} Level: ${level ?? 5} Backstory: ${backstory}` },
      ],
    });

    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: 'Error getting response from AI please try again later' }, { status: 500 });
  }
};
