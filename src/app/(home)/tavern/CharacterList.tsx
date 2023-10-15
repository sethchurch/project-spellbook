'use client';

import { Link } from '@nextui-org/react';

import { useCharacterStore } from '@/hooks/useCharacterStore';
import { useStore } from '@/hooks/useStore';

import { CharacterListItem, CharacterListItemSkeleton } from './CharacterListItem';

const CharacterListWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">{children}</div>;
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
        return (
          <Link key={id} className="hover:opacity-75" href={`/character/${id}`}>
            <CharacterListItem character={character} />
          </Link>
        );
      })}
    </CharacterListWrapper>
  );
};

export { CharacterList };
