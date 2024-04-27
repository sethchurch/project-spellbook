import OpenAI from 'openai';
import type { ChatCompletion } from 'openai/resources/index.mjs';

export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const createChatCompletion = async (...args: Parameters<typeof openai.chat.completions.create>) => {
  const response = await openai.chat.completions.create(...args);
  return response as ChatCompletion;
};
