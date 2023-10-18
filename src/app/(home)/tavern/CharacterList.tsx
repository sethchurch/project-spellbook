'use client';

import { useCharacterStore } from '@/hooks/useCharacterStore';
import { useStore } from '@/hooks/useStore';

import { CharacterListItem, CharacterListItemSkeleton } from './CharacterListItem';

const CharacterListWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 gap-6 py-3 sm:grid-cols-2 md:grid-cols-3 md:py-6 lg:grid-cols-4">{children}</div>
  );
};

const CharacterList = () => {
  const characters = useStore(useCharacterStore, (state) => state.characters);

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
