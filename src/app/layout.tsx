import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Providers } from '@/components/Providers';
import { AppConfig } from '@/config/AppConfig';
import { cn } from '@/utils/cn';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
  icons: AppConfig.icons,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      </head>
      <body className={cn('min-h-screen w-full bg-stone-300 dark:bg-neutral-950 antialiased', inter.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
