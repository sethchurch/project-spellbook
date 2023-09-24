'use client';

import { createTheme, MantineProvider, Mark } from '@mantine/core';

const componentDefaults = {
  Mark: Mark.extend({
    defaultProps: {
      color: 'grape',
      c: 'white',
      p: 'xs',
    },
  }),
};

const theme = createTheme({
  primaryColor: 'green',
  components: componentDefaults,
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      {children}
    </MantineProvider>
  );
};

export { ThemeProvider };
