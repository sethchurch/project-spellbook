import { type NextRequest, NextResponse } from 'next/server';

import { createChatCompletion } from '@/lib/openai';

import { createCharacter } from './functions';
import { basicCharacterPrompt } from './prompts';

type GenerativeCharacterPayload = {
  name: string;
  backstory: string;
};

export const POST = async (req: NextRequest) => {
  const { name, backstory } = (await req.json()) as GenerativeCharacterPayload;
  if (!name || !backstory) return NextResponse.json({ error: 'Missing name or backstory' }, { status: 400 });

  try {
    const response = await createChatCompletion({
      model: 'gpt-3.5-turbo',
      temperature: 0.8,
      function_call: { name: 'create_character' },
      functions: [createCharacter],
      messages: [
        { role: 'system', content: basicCharacterPrompt },
        { role: 'user', content: `Name: ${name}. Backstory: ${backstory}` },
      ],
    });

    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json({ error: 'Unable to fetch response from OpenAI' }, { status: 500 });
  }
};
