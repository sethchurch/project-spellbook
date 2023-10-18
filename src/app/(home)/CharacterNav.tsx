'use client';

import { Chip } from '@nextui-org/chip';
import Link from 'next/link';

import { useCharacterStore } from '@/hooks/useCharacterStore';
import { useStore } from '@/hooks/useStore';

interface CharacterNavSkeletonProps {
  count?: number;
}

const CharacterNavSkeleton = ({ count = 15 }: CharacterNavSkeletonProps) => {
  return (
    <div className="flex-stack">
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="flex w-full max-w-[300px] items-center gap-3">
            <div className="aspect-square h-7 rounded-full bg-default-400 dark:bg-zinc-700" />
            <div className="h-7 w-full rounded bg-default-400 dark:bg-zinc-700" />
          </div>
        ))}
    </div>
  );
};

const CharacterNav = () => {
  const characters = useStore(useCharacterStore, (state) => state.characters);

  if (!characters) return <CharacterNavSkeleton />;
  return (
    <div className="flex-stack">
      {characters.map((character, index) => {
        return (
          <Link
            key={index}
            className="shadow-md transition-all hover:opacity-50 hover:shadow-sm"
            href={`/characters/${index}`}
          >
            <Chip
              classNames={{ base: 'max-w-full w-full py-2 px-3 h-auto', content: 'p-0' }}
              radius="sm"
              variant="solid"
            >
              <div className="flex w-full max-w-[300px] items-center gap-3">
                <div className="aspect-square h-7 rounded-full border-3 border-zinc-800 bg-gradient-to-br from-violet-700 to-violet-950" />
                <div>{character.name}</div>
              </div>
            </Chip>
          </Link>
        );
      })}
    </div>
  );
};

export { CharacterNav };
