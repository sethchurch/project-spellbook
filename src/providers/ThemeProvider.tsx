'use client';

import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  primaryColor: 'green',
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      {children}
    </MantineProvider>
  );
};

export { ThemeProvider };
