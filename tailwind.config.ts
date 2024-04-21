import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

import { nextUiThemeConfig } from './config/theme';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  plugins: [nextui(nextUiThemeConfig)],
};
export default config;
