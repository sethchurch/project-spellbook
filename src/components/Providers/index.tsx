import type { PropsWithChildren } from 'react';

import { supabaseServer } from '@/lib/supabaseServer';

import { AuthProvider } from './AuthProvider';
import { QueryProvider } from './QueryProvider';
import { ThemeProvider } from './ThemeProvider';
import { ToastProvider } from './ToastProvider';

const Providers = async ({ children }: PropsWithChildren) => {
  const { data } = await supabaseServer().auth.getSession();
  const { session } = data || {};

  return (
    <ThemeProvider>
      <AuthProvider session={session}>
        <QueryProvider>
          <ToastProvider>{children}</ToastProvider>
        </QueryProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export { Providers };
