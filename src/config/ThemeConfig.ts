import type { CSSVariablesResolver, MantineTheme } from '@mantine/core';
import { createTheme, Mark } from '@mantine/core';

const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--font-family-monospace': theme.fontFamilyMonospace,
  },
  dark: {
    '--mantine-color-dark-9': theme.colors.dark[9],
  },
  light: {
    '--mantine-color-dark-9': theme.colors.gray[3],
  },
});

const componentDefaults = {
  Mark: Mark.extend({
    defaultProps: {
      color: 'grape',
      c: 'white',
      p: 'xs',
    },
  }),
};

const themeOverride = createTheme({
  primaryColor: 'green',
  components: componentDefaults,
}) as MantineTheme;

export { componentDefaults, resolver, themeOverride };
