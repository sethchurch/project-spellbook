'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <NextUIProvider>
      <NextThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  );
};

export { ThemeProvider };
