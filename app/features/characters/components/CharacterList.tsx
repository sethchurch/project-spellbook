import { useEffect } from 'react';

import { FilterProvider, useFilter } from '@/components/Providers/FilterProvider';
import { character as defaultCharacter } from '@/config/dummyData';
import type { CharacterWithBackstory } from '@/features/characters';
import { useCharacterFilter } from '@/hooks/useCharacterFilter';
import { useCharacterStore } from '@/hooks/useCharacterStore';
import { useMounted } from '@/hooks/useMounted';

import { CharacterListItem, CharacterListItemSkeleton } from './CharacterListItem';

interface CharacterListInnerProps {
  characters?: CharacterWithBackstory[];
}

const CharacterListInner = ({ characters }: CharacterListInnerProps) => {
  const filterCharacters = useFilter<CharacterWithBackstory>(characters ?? []);

  if (!characters) {
    return Array.from({ length: 4 }).map((_, index) => <CharacterListItemSkeleton key={index} />);
  }

  return Object.entries(filterCharacters).map(([id, c]) => {
    if (!c.visible) return null;
    return <CharacterListItem key={id} character={c} />;
  });
};

interface CharacterListProps {
  characters: CharacterWithBackstory[];
}

const CharacterList = ({ characters }: CharacterListProps) => {
  const filterValue = useCharacterFilter((state) => state.filterValue);
  const addCharacter = useCharacterStore((state) => state.addCharacter);
  const isMounted = useMounted();

  useEffect(() => {
    if (!isMounted) return;
    let alreadyAddedFirstCharacter = false;
    try {
      const added = localStorage.getItem('addedFirstCharacter');
      if (added) alreadyAddedFirstCharacter = true;
    } catch (error) {
      console.error(error);
    }
    if (!characters || (characters.length === 0 && !alreadyAddedFirstCharacter)) {
      if (addCharacter) addCharacter(defaultCharacter);
      try {
        localStorage.setItem('addedFirstCharacter', 'true');
      } catch (error) {
        console.error(error);
      }
    }
  }, [addCharacter, characters, isMounted]);
  return (
    <div className="grid grid-cols-1 gap-6 py-3 md:grid-cols-2 md:py-6 lg:grid-cols-3">
      <FilterProvider filterKeyList={['name', 'class']} filterValue={filterValue}>
        <CharacterListInner characters={characters} />
      </FilterProvider>
    </div>
  );
};

export { CharacterList };
