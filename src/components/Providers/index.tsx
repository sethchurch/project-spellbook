import type { PropsWithChildren } from 'react';

import { QueryProvider } from '@/components/Providers/QueryProvider';
import { ThemeProvider } from '@/components/Providers/ThemeProvider';

import { ToastProvider } from './ToastProvider';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <QueryProvider>
        <ToastProvider>{children}</ToastProvider>
      </QueryProvider>
    </ThemeProvider>
  );
};

export { Providers };
