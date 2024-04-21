import { NextUIProvider } from '@nextui-org/react';
import type { PropsWithChildren } from 'react';

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export { ThemeProvider };
