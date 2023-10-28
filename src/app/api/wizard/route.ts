import { type NextRequest, NextResponse } from 'next/server';

import type { Character } from '@/config/CharacterConfig';
import { createChatCompletion } from '@/lib/openai';

import { createCharacter } from './functions';
import { parseJSON } from './parseJSON';
import { basicCharacterPrompt } from './prompts';

type GenerativeCharacterPayload = {
  name: string;
  backstory: string;
  level: number;
};

export const POST = async (req: NextRequest) => {
  const { name, backstory, level } = (await req.json()) as GenerativeCharacterPayload;
  if (!name || !backstory) return NextResponse.json({ error: 'Missing name or backstory' }, { status: 400 });

  let functionCall;
  let response;
  try {
    response = await createChatCompletion({
      model: 'gpt-3.5-turbo',
      temperature: 0.8,
      function_call: { name: 'create_character' },
      functions: [createCharacter],
      messages: [
        { role: 'system', content: basicCharacterPrompt },
        { role: 'user', content: `Name: ${name} Level: ${level ?? 5} Backstory: ${backstory}` },
      ],
    });

    functionCall = response.choices[0]?.message.function_call?.arguments;
    if (!functionCall) throw new Error('No function call returned from OpenAI');

    const responseData = parseJSON<Character>(functionCall);
    return NextResponse.json({ ...responseData, name, backstory });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      {
        error: 'Error generating character. AI features are disabled for the non-local version for now.',
        functionCall,
        response,
      },
      { status: 500 },
    );
  }
};
