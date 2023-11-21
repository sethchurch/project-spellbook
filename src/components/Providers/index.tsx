import type { PropsWithChildren } from 'react';

import { AuthProvider } from './AuthProvider';
import { QueryProvider } from './QueryProvider';
import { SupabaseProvider } from './SupabaseProvider';
import { ThemeProvider } from './ThemeProvider';
import { ToastProvider } from './ToastProvider';

const Providers = async ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <SupabaseProvider>
        {/* @ts-ignore */}
        <AuthProvider>
          <QueryProvider>
            <ToastProvider>{children}</ToastProvider>
          </QueryProvider>
        </AuthProvider>
      </SupabaseProvider>
    </ThemeProvider>
  );
};

export { Providers };
