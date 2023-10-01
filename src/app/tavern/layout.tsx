'use client';

import { Button, Input } from '@nextui-org/react';

import { CharacterNavSkeleton } from '@/components/CharacterNavSkeleton';
import { Icon } from '@/components/Elements/Icon';
import { AppShell } from '@/components/Layout/AppShell';
import { Navbar } from '@/components/Layout/Navbar';
import { Sidenav } from '@/components/Layout/Sidenav';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <AppShell>
      <Navbar />
      <Sidenav>
        <div className="flex-stack">
          <Input
            classNames={{
              inputWrapper: [
                'bg-zinc-100',
                'dark:bg-zinc-700',
                'hover:bg-default-100/70',
                'dark:hover:bg-default/70',
                'group-data-[focus=true]:bg-zinc-100/100',
                'dark:group-data-[focus=true]:bg-zinc-900/70',
                '!cursor-text',
              ],
            }}
          />
          <Button color="primary">
            <Icon icon="plus" />
          </Button>
          <CharacterNavSkeleton />
        </div>
      </Sidenav>
      <main>{children}</main>
    </AppShell>
  );
};

export default AppLayout;
