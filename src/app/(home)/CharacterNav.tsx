'use client';

import Image from 'next/image';
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
            className="rounded-lg shadow-sm transition-all hover:opacity-50 hover:shadow-none"
            href={`/characters/${index}`}
          >
            <div className="rounded-md bg-stone-50/90 p-3 dark:bg-zinc-700/60">
              <div className="flex w-full max-w-[300px] items-center gap-3">
                <div className="relative aspect-square h-7 w-7 overflow-hidden rounded-full border-3 border-zinc-800 bg-gradient-to-br from-violet-700 to-violet-950">
                  <Image fill alt="image of character" sizes="100vw" src="https://picsum.photos/2048/1024" />
                </div>
                <div>{character.name}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export { CharacterNav };
