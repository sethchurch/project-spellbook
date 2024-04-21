import type { LinksFunction } from '@remix-run/node';
import { Links, Meta, Outlet, Scripts } from '@remix-run/react';

import globalStyles from '@/styles/globals.css?url';

import { Providers } from './components/Providers';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: globalStyles }];
};

export default function App() {
  return (
    <html lang="en">
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
