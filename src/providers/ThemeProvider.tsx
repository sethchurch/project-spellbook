'use client';

import { NextUIProvider } from '@nextui-org/react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <NextUIProvider>
        {children}
    </NextUIProvider>
  );
};

export { ThemeProvider };
