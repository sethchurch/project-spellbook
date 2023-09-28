import { Chip } from '@nextui-org/react';

import { CharacterSheetPod } from './CharacterSheetPod';

interface StatDisplayProps {
  stat: number;
}

const StatDisplay = ({ stat }: StatDisplayProps) => {
  const statBonus = Math.floor(stat / 2) - 5;

  return (
    <CharacterSheetPod className="flex aspect-square flex-col items-center justify-center px-6" variant="alt">
      <p className="m-auto text-3xl">{stat}</p>
      <Chip className="px-4" variant="faded">{`${statBonus >= 0 ? '+' : ''}${statBonus}`}</Chip>
    </CharacterSheetPod>
  );
};

export { StatDisplay };
