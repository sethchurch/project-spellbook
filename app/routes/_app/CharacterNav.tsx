import { Link } from '@remix-run/react';

import { useFilter } from '@/components/Providers/FilterProvider';
import type { CharacterWithBackstory } from '@/features/characters';

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

interface CharacterNavProps {
  characters: CharacterWithBackstory[];
}

const CharacterNav = ({ characters }: CharacterNavProps) => {
  const filterCharacters = useFilter<CharacterWithBackstory>(characters ?? []);

  if (!characters) return <CharacterNavSkeleton />;

  return (
    <div className="flex-stack">
      {filterCharacters.map((character) => {
        if (!character.visible) return null;
        const { id: characterId } = character;

        return (
          <Link
            key={characterId}
            className="rounded-lg shadow-sm transition-all hover:opacity-50 hover:shadow-none"
            to={`/characters/${characterId}`}
          >
            <div className="rounded-md bg-stone-50/90 p-3 dark:bg-zinc-700/60">
              <div className="flex w-full max-w-[300px] items-center gap-3">
                <div className="relative aspect-square size-7 overflow-hidden rounded-full border-3 border-zinc-800 bg-gradient-to-br from-violet-700 to-violet-950">
                  {/* TODO: Add Character Profile Image */}
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
