'use client';

import { MantineProvider } from '@mantine/core';

import { AppConfig } from '@/config/AppConfig';
import { resolver, themeOverride } from '@/config/ThemeConfig';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <MantineProvider
      cssVariablesResolver={resolver}
      defaultColorScheme={AppConfig.defaultColorScheme}
      theme={themeOverride}
    >
      {children}
    </MantineProvider>
  );
};

export { ThemeProvider };
