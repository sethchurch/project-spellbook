import OpenAI from 'openai';

export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const createChatCompletion = async (...args: Parameters<typeof openai.chat.completions.create>) => {
  const response = await openai.chat.completions.create(...args);
  return response;
};
