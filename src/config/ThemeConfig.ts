import type { CSSVariablesResolver, MantineTheme } from '@mantine/core';
import { createTheme, Mark } from '@mantine/core';

const resolver: CSSVariablesResolver = (theme) => ({
  variables: {},
  dark: {
    '--mantine-color-body': theme.colors.black?.[8] ?? '#000',
  },
  light: {
    '--mantine-color-body': theme.colors.gray?.[6],
    '--mantine-color-dark-9': theme.colors.gray[9],
    '--mantine-color-dark-8': theme.colors.gray[3],
    '--mantine-color-dark-7': theme.colors.gray[4],
    '--mantine-color-black-9': theme.colors.gray[8],
    '--mantine-color-black-8': theme.colors.gray[5],
  },
});

const componentDefaults = {
  Mark: Mark.extend({ defaultProps: { color: 'grape', c: 'white', p: 'xs' } }),
};

const themeOverride = createTheme({
  primaryColor: 'green',
  components: componentDefaults,
  colors: {
    black: [
      '#737373',
      '#666666',
      '#595959',
      '#4D4D4D',
      '#404040',
      '#333333',
      '#262626',
      '#1A1A1A',
      '#0D0D0D',
      '#000000',
    ],
  },
}) as MantineTheme;

export { componentDefaults, resolver, themeOverride };
