'use client';

import { Button } from '@nextui-org/button';
import { useDisclosure } from '@nextui-org/react';

import { CharacterNav } from '@/app/(home)/CharacterNav';
import { useAppShell } from '@/components/Layout/AppShell';
import { useCharacterFilter } from '@/hooks/useCharacterFilter';
import { useCharacterStore } from '@/hooks/useCharacterStore';
import { cn } from '@/utils/cn';

import { CharacterFilterInput } from '../Elements/CharacterFilterInput';
import { Icon } from '../Elements/Icon';
import { ImportCharactersModal } from '../Modal/ImportCharactersModal';
import { NewCharacterModal } from '../Modal/NewCharacterModal';
import { FilterProvider } from '../Providers/FilterProvider';

const Sidenav = () => {
  const { isOpen: isOpenNew, onOpen: onOpenNew, onClose: onCloseNew } = useDisclosure();
  const { isOpen: isOpenImport, onOpen: onOpenImport, onClose: onCloseImport } = useDisclosure();
  const { sideNavOpen } = useAppShell();
  const sideNavClass = sideNavOpen ? 'ml-0' : '-ml-72';
  const filterValue = useCharacterFilter((state) => state.filterValue);
  const [characters] = useCharacterStore((state) => [state.characters, state.importCharacters]);

  const exportCharacters = () => {
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(characters))}`;
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', 'characters.json');
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

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
          <Button className="shrink-0" color="primary" onClick={onOpenNew}>
            <Icon icon="plus" />
          </Button>
        </div>
        <div className="overflow-y-auto px-3">
          <FilterProvider filterKeyList={['name', 'class']} filterValue={filterValue}>
            <CharacterNav />
          </FilterProvider>
        </div>

        <div className="flex-stack w-full justify-center self-end px-3 pb-3 pt-1">
          <Button onClick={exportCharacters}>Export Characters</Button>
          <Button onClick={onOpenImport}>Import Characters</Button>
        </div>
      </div>
      <NewCharacterModal close={onCloseNew} isOpen={isOpenNew} />
      <ImportCharactersModal isOpen={isOpenImport} onClose={onCloseImport} />
    </aside>
  );
};

export { Sidenav };
