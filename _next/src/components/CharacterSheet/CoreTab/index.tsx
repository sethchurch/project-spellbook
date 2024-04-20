'use client';

import { useFormContext } from 'react-hook-form';

import { Pod, PodChip, PodResource } from '@/components/CharacterSheet/Pod';
import { FormCheck } from '@/components/Form/FormCheck';
import { FormInput } from '@/components/Form/FormInput';
import { Textarea } from '@/components/Form/Textarea';
import { camelCase } from '@/utils/camelCase';
import { getProficencyBonus } from '@/utils/getProficencyBonus';

import { StatDisplay } from '../StatDisplay';
import { CoreTabs } from './CoreTabs';
import { DeathSavesPod } from './DeathSavesPod';
import { ProficienciesPod } from './ProficienciesPod';

const CoreTab = () => {
  const { getValues } = useFormContext();
  const proficencyBonus = getProficencyBonus(getValues('level'));
  return (
    <div className="grid grid-cols-1 grid-rows-[1fr_max-content] gap-x-2 gap-y-3 p-2 md:gap-3 md:p-5 lg:grid-cols-[6fr_3fr] xl:grid-cols-[2fr_6fr_2fr]">
      {/* Character Details */}
      <Pod className="xl:col-span-2" label="Character Details">
        <div className="grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-2 md:grid-cols-3 md:gap-3">
          {['Name', 'Race', 'Level', 'Class', 'Background', 'Alignment'].map((field) => (
            <FormInput key={field} label={field} name={field.toLowerCase()} styleVariant="basic" />
          ))}
        </div>
      </Pod>

      {/* Inspiration & Proficiency Bonus */}
      <Pod className="row-start-1 md:row-start-auto" label="Inspiration & Proficiency Bonus">
        <div className="flex h-full flex-col justify-around gap-x-2 gap-y-3 py-3 md:gap-3">
          <PodChip startContent={<FormCheck className="-ml-1 -mr-2" name="inspired" size="md" />}>Inspiration</PodChip>
          <PodChip left={`+${proficencyBonus}`}>Proficiency Bonus</PodChip>
        </div>
      </Pod>

      {/* Skills */}
      <ProficienciesPod />

      {/* Combat & CoreTabs */}
      <div className="flex h-full flex-col gap-x-2 gap-y-3 md:gap-3">
        <Pod className="flex-[1]" classNames={{ content: 'grid flex-[1] gap-x-2 gap-y-3 sm:grid-cols-3 md:gap-3' }}>
          {['Armor Class', 'Initiative', 'Speed'].map((x) => (
            <Pod key={x} label={x} variant="alt">
              <FormInput name={camelCase(x)} />
            </Pod>
          ))}
        </Pod>
        <Pod className="flex-[2]">
          <div className="flex h-full flex-col gap-x-2 gap-y-3 md:flex-row md:gap-3">
            <Pod className="flex-[2]" label="HP" variant="alt">
              <PodResource name="hitPoints" />
            </Pod>
            <Pod className="flex-[1]" label="Temporary HP" variant="alt">
              <FormInput defaultValue="0" name="hitPoints.temporary" />
            </Pod>
            <Pod className="flex-[2]" label="Hit Dice" variant="alt">
              <PodResource name="hitDice" />
            </Pod>
          </div>
        </Pod>
        <Pod className="flex-[1]">
          <div className="grid flex-[1] grid-cols-1 justify-start gap-3 lg:grid-cols-3 xl:grid-cols-6">
            {['Str', 'Dex', 'Con', 'Int', 'Wis', 'Cha'].map((statName, index) => (
              <StatDisplay key={index} label={statName} statIndex={index} />
            ))}
          </div>
        </Pod>
        <div className="flex w-full flex-[8] flex-col">
          <CoreTabs />
        </div>
      </div>

      {/* Bio & Proficiencies */}
      <div className="col-span-1 flex h-full flex-col gap-x-2 gap-y-3 md:gap-3 lg:col-span-2 xl:col-span-1">
        <DeathSavesPod />
        {['Personality Traits', 'Ideals', 'Bonds', 'Flaws'].map((x) => (
          <Pod key={x} label={x}>
            <Textarea name={`bio.${camelCase(x)}`} />
          </Pod>
        ))}
        <Pod label="Proficiencies & Languages">
          <div className="flex-stack">
            {['Languages', 'Weapons', 'Armor', 'Other'].map((x) => (
              <FormInput key={x} label={x} name={`proficiencies.${camelCase(x)}`} styleVariant="basic" />
            ))}
          </div>
        </Pod>
      </div>
    </div>
  );
};

CoreTab.displayName = 'CoreTab';
export { CoreTab };
