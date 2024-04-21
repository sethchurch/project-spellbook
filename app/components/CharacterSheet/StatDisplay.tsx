'use client';

import { Chip } from '@nextui-org/chip';
import { useFormContext } from 'react-hook-form';

import { FormInput } from '@/components/Form/FormInput';
import { bonusify } from '@/utils/bonusify';
import { calcStatBonus } from '@/utils/calcStatBonus';

import type { PodProps } from './Pod/Pod';
import { Pod } from './Pod/Pod';

interface StatDisplayProps extends PodProps {
  statIndex: number;
}

const StatDisplay = ({ statIndex, ...props }: StatDisplayProps) => {
  const { getValues } = useFormContext();

  const fieldName = `stats[${statIndex}]`;
  const statBonus = calcStatBonus(getValues(fieldName) as number);

  return (
    <Pod classNames={{ content: 'flex h-full flex-col items-center justify-between gap-3' }} variant="alt" {...props}>
      <FormInput className="size-full" max={30} min={0} name={fieldName} />
      <Chip className="px-4" variant="faded">
        <p>{bonusify(statBonus)}</p>
      </Chip>
    </Pod>
  );
};

export { StatDisplay };
