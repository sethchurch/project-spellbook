import type { PropsWithChildren } from 'react';

import { QueryProvider } from '@/components/Providers/QueryProvider';
import { ThemeProvider } from '@/components/Providers/ThemeProvider';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  );
};

export { Providers };
