import { Pod } from '@/components/CharacterSheet/Pod';
import { CheckArrayProvider } from '@/components/Form/CheckArrayProvider';
import type { Proficiency } from '@/config/CharacterConfig';
import { characterSkills, savingThrows } from '@/config/CharacterConfig';

import { ProficencyList } from './ProficencyList';
import { StatDisplay } from './StatDisplay';

const ProficienciesPod = () => {
  return (
    <Pod label="Skills & Saves">
      <div className="flex w-full flex-col flex-nowrap gap-x-2 gap-y-3 sm:flex-row lg:gap-3">
        <div className="flex-stack flex-[2] justify-start">
          {['Str', 'Dex', 'Con', 'Int', 'Wis', 'Cha'].map((statName, index) => (
            <StatDisplay key={index} label={statName} statIndex={index} />
          ))}
        </div>
        <div className="flex h-full flex-[4] flex-col gap-x-2 gap-y-3 md:gap-3">
          <Pod className="flex-[2]" label="Saving Throws" variant="alt">
            <CheckArrayProvider name="savingThrows">
              <ProficencyList proficencyData={savingThrows as Proficiency[]} />
            </CheckArrayProvider>
          </Pod>
          <Pod className="flex-[6]" label="Skills" variant="alt">
            <CheckArrayProvider name="skills.proficent">
              {/* TODO: Handle expertise -- resolve form not saving */}
              <ProficencyList proficencyData={characterSkills as Proficiency[]} />
            </CheckArrayProvider>
          </Pod>
        </div>
      </div>
    </Pod>
  );
};

export { ProficienciesPod };
