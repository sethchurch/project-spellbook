'use client';

import { useEffect } from 'react';

import { character } from '@/config/dummyData';
import { useCharacterStore } from '@/hooks/useCharacterStore';
import { useMounted } from '@/hooks/useMounted';
import { useStore } from '@/hooks/useStore';

import { CharacterListItem, CharacterListItemSkeleton } from './CharacterListItem';

const CharacterListWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 gap-6 py-3 sm:grid-cols-2 md:grid-cols-3 md:py-6 lg:grid-cols-4">{children}</div>
  );
};

const CharacterList = () => {
  const characters = useStore(useCharacterStore, (state) => state.characters);
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
      if (addCharacter) addCharacter(character);
      try {
        localStorage.setItem('addedFirstCharacter', 'true');
      } catch (error) {
        console.error(error);
      }
    }
  }, [addCharacter, characters, isMounted]);

  if (!characters) {
    return (
      <CharacterListWrapper>
        {Array.from({ length: 4 }).map((_, index) => (
          <CharacterListItemSkeleton key={index} />
        ))}
      </CharacterListWrapper>
    );
  }

  return (
    <CharacterListWrapper>
      {Object.entries(characters).map(([id, character]) => {
        return <CharacterListItem key={id} character={character} characterId={+id} />;
      })}
    </CharacterListWrapper>
  );
};

export { CharacterList };
