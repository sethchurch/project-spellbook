'use client';

import { Button } from '@nextui-org/button';
import { useDisclosure } from '@nextui-org/react';

import { CharacterNav } from '@/app/(home)/CharacterNav';
import { useAppShell } from '@/components/Layout/AppShell';
import { useCharacterFilter } from '@/hooks/useCharacterFilter';
import { cn } from '@/utils/cn';

import { CharacterFilterInput } from '../Elements/CharacterFilterInput';
import { Icon } from '../Elements/Icon';
import { NewCharacterModal } from '../Modal/NewCharacterModal';
import { FilterProvider } from '../Providers/FilterProvider';

const Sidenav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { sideNavOpen } = useAppShell();
  const sideNavClass = sideNavOpen ? 'ml-0' : '-ml-72';
  const filterValue = useCharacterFilter((state) => state.filterValue);

  return (
    <aside
      className={cn(
        sideNavClass,
        'fixed xl:sticky xl:top-0 z-40 -mt-16 h-screen w-72 flex-shrink-0 bg-stone-200 pt-20 transition-all dark:bg-zinc-800',
      )}
    >
      <div className="flex h-full flex-col gap-3">
        <div className="flex flex-col gap-3 px-3">
          <CharacterFilterInput />
          <Button className="shrink-0" color="primary" onClick={onOpen}>
            <Icon icon="plus" />
          </Button>
        </div>
        <div className="overflow-y-auto px-3">
          <FilterProvider filterKeyList={['name', 'class']} filterValue={filterValue}>
            <CharacterNav />
          </FilterProvider>
        </div>
      </div>
      <NewCharacterModal close={onClose} isOpen={isOpen} />
    </aside>
  );
};

export { Sidenav };
