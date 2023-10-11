'use client';

import { Chip } from '@nextui-org/chip';
import { useFormContext } from 'react-hook-form';

import type { PodProps } from '../Pod/Pod';
import { Pod } from '../Pod/Pod';
import { PodInput } from '../Pod/PodInput';

interface StatDisplayProps extends PodProps {
  statIndex: number;
}

const StatDisplay = ({ statIndex, ...props }: StatDisplayProps) => {
  const { getValues } = useFormContext();

  const fieldName = `stats[${statIndex}]`;
  const statBonus = Math.floor(getValues(fieldName) / 2) - 5;

  return (
    <Pod className="aspect-square max-w-fit" variant="alt" {...props}>
      <div className="flex h-full flex-col items-center justify-between gap-3 px-6">
        <div className="flex h-full w-full items-center justify-center">
          <PodInput max={30} min={0} name={fieldName} />
        </div>
        <Chip className="px-4" variant="faded">{`${statBonus >= 0 ? '+' : ''}${statBonus}`}</Chip>
      </div>
    </Pod>
  );
};

export { StatDisplay };
