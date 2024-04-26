import { Chip } from '@nextui-org/chip';
import { useFormContext } from 'react-hook-form';

import type { PodProps } from '@/components/Elements/Pod';
import { Pod } from '@/components/Elements/Pod';
import { FormInput } from '@/components/Form/FormInput';
import { bonusify, calcStatBonus } from '@/features/characters/utils/characterUtils';

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
