'use client';

import { Button, Input } from '@nextui-org/react';
import { IconPlus } from '@tabler/icons-react';

import { CharacterNavSkeleton } from '@/components/CharacterNavSkeleton';
import { AppShell } from '@/components/Layout/AppShell';
import { Navbar } from '@/components/Layout/Navbar';
import { Sidenav } from '@/components/Layout/Sidenav';
import { Stack } from '@/components/Layout/Stack';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <AppShell>
      <Navbar />
      <Sidenav>
        <Stack>
          <Input />
          <Button color="primary">
            <IconPlus />
          </Button>
          <CharacterNavSkeleton />
        </Stack>
      </Sidenav>
      <main>{children}</main>
    </AppShell>
  );
};

export default AppLayout;
