import type { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { json, Links, Meta, Outlet, Scripts, useLoaderData } from '@remix-run/react';
import type { PropsWithChildren } from 'react';

import { BasicErrorBoundary } from '@/components/Layout/ErrorBoundary';
import { Providers } from '@/components/Providers';
import { AppConfig } from '@/config/AppConfig';
import { getAuthSession } from '@/features/auth/utils/session.server';
import globalStyles from '@/styles/globals.css?url';
import { getTheme } from '@/utils/theme.server';

export const meta: MetaFunction = () => [
  { title: AppConfig.title },
  { name: 'description', content: AppConfig.description },
];

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: globalStyles, as: 'style' },
  { rel: 'icon', href: '/favicon.ico' },
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await getAuthSession(request);
  return json({ userPrefs: { theme: getTheme(request) }, session });
};

export const Layout = ({ children }: PropsWithChildren) => {
  const { userPrefs } = useLoaderData<typeof loader>();
  const { theme } = userPrefs;

  return (
    <html className={theme} lang={AppConfig.locale}>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <Meta />
        <Links />
      </head>
      <body className="grainy min-h-screen w-full bg-stone-300 antialiased dark:bg-neutral-950">
        {children}
        <Scripts />
      </body>
    </html>
  );
};

export default function App() {
  return (
    <Providers>
      <Outlet />
    </Providers>
  );
}

export const ErrorBoundary = () => {
  return <BasicErrorBoundary />;
};
