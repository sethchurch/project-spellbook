import { Chip } from '@nextui-org/react';

import type { CharacterSheetPodProps } from './CharacterSheetPod';
import { CharacterSheetPod } from './CharacterSheetPod';

interface StatDisplayProps extends CharacterSheetPodProps {
  stat: number;
}

const StatDisplay = ({ stat, ...props }: StatDisplayProps) => {
  const statBonus = Math.floor(stat / 2) - 5;

  return (
    <CharacterSheetPod className=" aspect-square" variant="alt" {...props}>
      <div className="flex h-full flex-col items-center justify-between gap-3 px-6">
        <div className="flex h-full w-full items-center justify-center">
          <p className="text-3xl">{stat}</p>
        </div>
        <Chip className="px-4" variant="faded">{`${statBonus >= 0 ? '+' : ''}${statBonus}`}</Chip>
      </div>
    </CharacterSheetPod>
  );
};

export { StatDisplay };
