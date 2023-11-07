import { Checkbox } from '@nextui-org/checkbox';

import { Pod } from '@/components/CharacterSheet/Pod/Pod';
import { PodChip } from '@/components/CharacterSheet/Pod/PodChip';
import { CheckCounter } from '@/components/Form/CheckCounter';
import type { PropsWithClassName } from '@/types/propTypes';

const DeathSavesPod = ({ className }: PropsWithClassName) => {
  return (
    <Pod
      className={className}
      classNames={{ content: 'flex h-full flex-col justify-around gap-x-2 gap-y-3 py-3 md:gap-3' }}
      label="Death Saves"
    >
      <PodChip
        startContent={
          <CheckCounter
            CheckComponent={<Checkbox className="-ml-1 -mr-2" color="success" size="md" />}
            max={3}
            name="deathSaves.successes"
          />
        }
      >
        Successes
      </PodChip>
      <PodChip
        startContent={
          <CheckCounter
            CheckComponent={<Checkbox className="-ml-1 -mr-2" color="danger" size="md" />}
            max={3}
            name="deathSaves.failures"
          />
        }
      >
        Failures
      </PodChip>
    </Pod>
  );
};

export { DeathSavesPod };
