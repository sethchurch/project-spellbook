import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Links, Meta, Outlet, Scripts } from '@remix-run/react';
import type { PropsWithChildren } from 'react';

import globalStyles from '@/styles/globals.css?url';

import { Providers } from './components/Providers';
import { AppConfig } from './config/AppConfig';

export const meta: MetaFunction = () => [
  { title: AppConfig.title },
  { name: 'description', content: AppConfig.description },
];

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: globalStyles },
  { rel: 'icon', href: '/favicon.ico' },
];

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html className="dark" lang={AppConfig.locale}>
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
