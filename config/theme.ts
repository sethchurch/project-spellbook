import type { NextUIPluginConfig } from '@nextui-org/react';
import colors from 'tailwindcss/colors';

const nextUiThemeConfig: NextUIPluginConfig = {
  themes: {
    dark: {
      colors: {
        primary: colors.green[600],
        focus: colors.green[600],
      },
    },
    'purple-dark': {
      extend: 'dark',
      colors: {
        primary: {
          50: '#3B096C',
          100: '#520F83',
          200: '#7318A2',
          300: '#9823C2',
          400: '#c031e2',
          500: '#DD62ED',
          600: '#F182F6',
          700: '#FCADF9',
          800: '#FDD5F9',
          900: '#FEECFE',
          DEFAULT: '#DD62ED',
        },
      },
    },
  },
};

export { nextUiThemeConfig };
