'use client';

import { Button } from '@nextui-org/button';
import { useDisclosure } from '@nextui-org/react';

import { CharacterNav } from '@/app/(home)/CharacterNav';
import { Input } from '@/components/Elements/Input';
import { useAppShell } from '@/components/Layout/AppShell';
import { cn } from '@/utils/cn';

import { Icon } from '../Elements/Icon';
import { NewCharacterModal } from '../Modal/NewCharacterModal';

const Sidenav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { sideNavOpen } = useAppShell();
  const sideNavClass = sideNavOpen ? 'ml-0' : '-ml-72';

  return (
    <aside
      className={cn(
        sideNavClass,
        'fixed xl:sticky xl:top-0 z-40 -mt-16 h-screen w-72 flex-shrink-0 bg-stone-200 pt-20 transition-all dark:bg-zinc-800',
      )}
    >
      <div className="flex h-full flex-col gap-3">
        <div className="flex flex-col gap-3 px-3">
          <Input isClearable isDisabled placeholder="Find characters..." styleVariant="inset" variant="faded" />
          <Button className="shrink-0" color="primary" onClick={onOpen}>
            <Icon icon="plus" />
          </Button>
        </div>
        <div className="overflow-y-auto px-3">
          <CharacterNav />
        </div>
      </div>
      <NewCharacterModal close={onClose} isOpen={isOpen} />
    </aside>
  );
};

export { Sidenav };
