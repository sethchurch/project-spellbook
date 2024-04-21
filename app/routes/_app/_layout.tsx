import { Outlet } from '@remix-run/react';

import { AppShell } from '@/components/Layout/AppShell';
import { MaxWidthWrapper } from '@/components/Layout/MaxWidthWrapper';
import { Navbar } from '@/components/Layout/Navbar';
import { Sidenav } from '@/components/Layout/Sidenav';

const AppLayout = () => {
  return (
    <AppShell>
      <Navbar />
      <main className="flex">
        <Sidenav />
        <MaxWidthWrapper>
          <Outlet />
        </MaxWidthWrapper>
      </main>
    </AppShell>
  );
};

export default AppLayout;
