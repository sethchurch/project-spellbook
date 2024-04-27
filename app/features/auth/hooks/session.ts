import { useRouteLoaderData } from '@remix-run/react';

import type { loader as rootLoader } from '@/root';

export const useOptionalSession = () => {
  const data = useRouteLoaderData<typeof rootLoader>('root');
  if (!data) {
    return undefined;
  }
  return data?.session;
};

export const useSession = () => {
  const maybeSession = useOptionalSession();
  if (!maybeSession) {
    throw new Error(
      'No session found in root loader, but session is required by useSession. If session is optional, try useOptionalSession instead.',
    );
  }
  return maybeSession;
};
