import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Links, Meta, Outlet, Scripts } from '@remix-run/react';

import globalStyles from '@/styles/globals.css?url';

import { Providers } from './components/Providers';
import { AppConfig } from './config/AppConfig';

export const meta: MetaFunction = () => {
  return [{ title: AppConfig.title }, { name: 'description', content: AppConfig.description }];
};

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: globalStyles }, ...AppConfig.icons];
};

export default function App() {
  return (
    <html className="dark" lang={AppConfig.locale}>
      <head>
        <link href="data:image/x-icon;base64,AA" rel="icon" />
        <Meta />
        <Links />
      </head>
      <body className="grainy min-h-screen w-full bg-stone-300 antialiased dark:bg-neutral-950">
        <Providers>
          <Outlet />
          <Scripts />
        </Providers>
      </body>
    </html>
  );
}
