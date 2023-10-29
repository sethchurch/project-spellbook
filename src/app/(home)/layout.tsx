import type { PropsWithChildren } from 'react';

import { AppShell } from '@/components/Layout/AppShell';
import { MaxWidthWrapper } from '@/components/Layout/MaxWidthWrapper';
import { Navbar } from '@/components/Layout/Navbar';
import { Sidenav } from '@/components/Layout/Sidenav';

const AppLayout = async ({ children }: PropsWithChildren) => {
  // const supabase = createServerComponentClient({ cookies });
  // const { data } = await supabase.auth.getSession();

  // if (!data.session) {
  //   redirect('/');
  // }

  return (
    <AppShell>
      <Navbar />
      <main className="flex">
        <Sidenav />
        <MaxWidthWrapper>{children}</MaxWidthWrapper>
      </main>
    </AppShell>
  );
};

export default AppLayout;
