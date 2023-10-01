import { Chip } from '@nextui-org/react';

import type { PodProps } from './Pod/Pod';
import { Pod } from './Pod/Pod';

interface StatDisplayProps extends PodProps {
  stat: number;
}

const StatDisplay = ({ stat, ...props }: StatDisplayProps) => {
  const statBonus = Math.floor(stat / 2) - 5;

  return (
    <Pod className=" aspect-square" variant="alt" {...props}>
      <div className="flex h-full flex-col items-center justify-between gap-3 px-6">
        <div className="flex h-full w-full items-center justify-center">
          <p className="text-3xl">{stat}</p>
        </div>
        <Chip className="px-4" variant="faded">{`${statBonus >= 0 ? '+' : ''}${statBonus}`}</Chip>
      </div>
    </Pod>
  );
};

export { StatDisplay };