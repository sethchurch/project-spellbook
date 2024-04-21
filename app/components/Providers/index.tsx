import type { PropsWithChildren } from 'react';

import { AuthProvider } from './AuthProvider';
import { QueryProvider } from './QueryProvider';
import { ThemeProvider } from './ThemeProvider';
import { ToastProvider } from './ToastProvider';

const Providers = ({ children }: PropsWithChildren) => {
  // const { data } = await supabaseServer().auth.getSession();
  // const { session } = data || {};

  return (
    <ThemeProvider>
      <AuthProvider session={null}>
        <QueryProvider>
          <ToastProvider>{children}</ToastProvider>
        </QueryProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export { Providers };
