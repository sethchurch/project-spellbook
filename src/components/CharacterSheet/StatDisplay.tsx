import { Chip } from '@nextui-org/react';

import type { PodProps } from './Pod/Pod';

interface StatDisplayProps extends PodProps {
  stat: number;
}

const StatDisplay = ({ stat }: StatDisplayProps) => {
  const statBonus = Math.floor(stat / 2) - 5;

  return (
    <div className="flex h-full flex-col items-center justify-between gap-3 px-6">
      <div className="flex h-full w-full items-center justify-center">
        {/* <PodInput max={30} min={0} name={fieldName} /> */}
        {stat}
      </div>
      <Chip className="px-4" variant="faded">{`${statBonus >= 0 ? '+' : ''}${statBonus}`}</Chip>
    </div>
  );
};

export { StatDisplay };
