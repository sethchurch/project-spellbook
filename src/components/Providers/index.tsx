import type { PropsWithChildren } from 'react';

import { AuthProvider } from './AuthProvider';
import { QueryProvider } from './QueryProvider';
import { ThemeProvider } from './ThemeProvider';
import { ToastProvider } from './ToastProvider';

const Providers = async ({ children }: PropsWithChildren) => {
  // const supabase = createServerComponentClient({ cookies });
  // const { data } = await supabase.auth.getSession();
  return (
    <ThemeProvider>
      <AuthProvider>
        <QueryProvider>
          <ToastProvider>{children}</ToastProvider>
        </QueryProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export { Providers };
