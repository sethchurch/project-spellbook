'use client';

import { Button } from '@nextui-org/button';
import { useDisclosure } from '@nextui-org/react';

import { Icon } from '@/components/Elements/Icon';
import { Input } from '@/components/Elements/Input';
import { AppShell } from '@/components/Layout/AppShell';
import { Navbar } from '@/components/Layout/Navbar';
import { Sidenav } from '@/components/Layout/Sidenav';
import { NewCharacterModal } from '@/components/NewCharacterModal';

import { CharacterNav } from './CharacterNav';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <AppShell>
      <Navbar />
      <main className="flex">
        <Sidenav>
          <div className="flex-stack">
            <Input isClearable styleVariant="inset" variant="faded" />
            <Button color="primary" onClick={onOpen}>
              <Icon icon="plus" />
            </Button>
            <CharacterNav />
          </div>
        </Sidenav>
        <div className="grow">{children}</div>
      </main>
      <NewCharacterModal close={onClose} isOpen={isOpen} />
    </AppShell>
  );
};

export default AppLayout;
