import { Pod } from '@/components/CharacterSheet/Pod';
import type { Proficiency } from '@/config/CharacterConfig';
import { characterSkills, savingThrows } from '@/config/CharacterConfig';
import type { PropsWithClassName } from '@/types/propTypes';
import { cn } from '@/utils/cn';

import { ProficencyList } from './ProficencyList';

const ProficienciesPod = ({ className }: PropsWithClassName) => {
  return (
    <Pod className={cn('self-start', className)} label="Skills & Saves">
      <div className="flex w-full flex-col flex-nowrap gap-x-2 gap-y-3 lg:gap-3">
        <Pod className="flex-[2]" label="Saving Throws" variant="alt">
          <ProficencyList name="savingThrows" proficencyData={savingThrows as Proficiency[]} />
        </Pod>
        <Pod className="flex-[6]" label="Skills" variant="alt">
          {/* TODO: Handle expertise */}
          <ProficencyList allowExpertise name="skills" proficencyData={characterSkills as Proficiency[]} />
        </Pod>
      </div>
    </Pod>
  );
};

export { ProficienciesPod };
