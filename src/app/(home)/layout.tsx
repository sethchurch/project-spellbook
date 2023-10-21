'use client';

import { Button } from '@nextui-org/button';
import { useDisclosure } from '@nextui-org/react';
import type { PropsWithChildren } from 'react';

import { Icon } from '@/components/Elements/Icon';
import { Input } from '@/components/Elements/Input';
import { AppShell } from '@/components/Layout/AppShell';
import { MaxWidthWrapper } from '@/components/Layout/MaxWidthWrapper';
import { Navbar } from '@/components/Layout/Navbar';
import { Sidenav } from '@/components/Layout/Sidenav';
import { NewCharacterModal } from '@/components/Modal/NewCharacterModal';

import { CharacterNav } from './CharacterNav';

const AppLayout = ({ children }: PropsWithChildren) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <AppShell>
      <Navbar />
      <main className="flex">
        <Sidenav>
          <Input isClearable isDisabled placeholder="Find characters..." styleVariant="inset" variant="faded" />
          <Button color="primary" onClick={onOpen}>
            <Icon icon="plus" />
          </Button>
          <CharacterNav />
        </Sidenav>
        <MaxWidthWrapper>{children}</MaxWidthWrapper>
      </main>
      <NewCharacterModal close={onClose} isOpen={isOpen} />
    </AppShell>
  );
};

export default AppLayout;
