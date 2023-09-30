import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Providers } from '@/components/Providers';
import { AppConfig } from '@/config/AppConfig';

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
    <html lang="en">
      <head />
      <body className={`${inter.className} min-h-screen bg-neutral-400 dark:bg-neutral-950`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
