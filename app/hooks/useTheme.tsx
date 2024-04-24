import { useRouteLoaderData } from '@remix-run/react';

import type { loader } from '@/root';
import type { LoaderJSONType } from '@/types/utils';
import type { Theme } from '@/utils/theme.server';

const useTheme = () => {
  const rootLoaderData = useRouteLoaderData('root') as Awaited<LoaderJSONType<typeof loader>>;
  const theme = rootLoaderData?.userPrefs?.theme;
  return theme as Theme;
};

export { useTheme };
