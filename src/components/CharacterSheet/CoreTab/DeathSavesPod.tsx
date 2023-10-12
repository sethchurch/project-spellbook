import { Checkbox } from '@nextui-org/checkbox';

import { Pod } from '@/components/CharacterSheet/Pod/Pod';
import { PodChip } from '@/components/CharacterSheet/Pod/PodChip';
import { CheckCounter } from '@/components/Form/CheckCounter';

interface DeathSavesPodProps {
  className?: string;
}

const DeathSavesPod = ({ className }: DeathSavesPodProps) => {
  return (
    <Pod className={className} label="Death Saves">
      <div className="flex h-full flex-col justify-around gap-x-2 gap-y-3 pb-3 md:gap-3">
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
      </div>
    </Pod>
  );
};

export { DeathSavesPod };
