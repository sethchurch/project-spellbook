import type { LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/react';

import { destroyAuthSession, getAuthSession } from '@/features/auth/utils/session.server';

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getAuthSession(request);
  if (!session) {
    return redirect('/login');
  }

  return destroyAuthSession(request, { redirectTo: '/login' });
};
