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
      temperature: 1,
      function_call: { name: 'create_character' },
      functions: [createCharacter],
      messages: [
        { role: 'system', content: basicCharacterPrompt },
        { role: 'user', content: `Name: ${name}. Backstory: ${backstory}` },
      ],
    });

    const functionCall = response.choices[0]?.message.function_call?.arguments;
    if (!functionCall) throw new Error('No function call returned from OpenAI');

    const responseData = JSON.parse(functionCall);
    return NextResponse.json({ ...responseData, name, backstory });
  } catch (error: any) {
    return NextResponse.json({ error: 'Error generating character' }, { status: 500 });
  }
};
