import { parseWithZod } from '@conform-to/zod';
import type { ActionFunction, ActionFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { z } from 'zod';

import { setTheme } from '@/utils/theme.server';

const ThemeFormSchema = z.object({
  theme: z.enum(['light', 'dark']),
});

export const action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const submission = parseWithZod(formData, { schema: ThemeFormSchema });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  const { theme } = submission.value;
  const responseInit = { headers: { 'set-cookie': setTheme(theme) } };

  return json({ result: submission.reply() }, responseInit);
};
