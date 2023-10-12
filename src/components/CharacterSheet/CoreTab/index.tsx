import { Pod, PodChip, PodInput, PodResource, PodTextarea } from '@/components/CharacterSheet/Pod';
import { ControlledCheck } from '@/components/Form/ControlledCheck';
import { Input } from '@/components/Form/Input';
import { camelCase } from '@/utils/camelCase';

import { CoreTabs } from './CoreTabs';
import { DeathSavesPod } from './DeathSavesPod';
import { ProficienciesPod } from './ProficienciesPod';

const CoreTab = () => {
  return (
    <>
      <div className="h-32 w-full rounded-t-lg bg-gradient-to-r from-violet-700 to-violet-950 md:h-64" />
      <div className="grid grid-cols-1 grid-rows-[1fr_max-content] gap-x-2 gap-y-3 p-2 md:gap-3 md:p-5 lg:grid-cols-[6fr_3fr] xl:grid-cols-[3fr_6fr_3fr]">
        <Pod className="xl:col-span-2" label="Character Details">
          <div className="grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-2 md:grid-cols-3 md:gap-3">
            {['Name', 'Race', 'Experience', 'Class', 'Background', 'Alignment'].map((field) => (
              <PodInput key={field} label={field} name={field.toLowerCase()} styleVariant="unstyled" />
            ))}
          </div>
        </Pod>
        <Pod
          className="row-start-1 flex shrink-0 flex-col justify-center gap-x-2 gap-y-3 md:row-start-auto md:gap-3"
          label="Inspiration & Proficiency Bonus"
        >
          <div className="flex h-full flex-col justify-around gap-x-2 gap-y-3 pb-3 md:gap-3">
            <PodChip startContent={<ControlledCheck className="-ml-1 -mr-2" name="inspired" size="md" />}>
              Inspiration
            </PodChip>
            <PodChip left="+2">Proficiency Bonus</PodChip>
          </div>
        </Pod>
        <ProficienciesPod />
        <div className="flex h-full flex-col gap-x-2 gap-y-3 md:gap-3">
          <Pod>
            <div className="grid flex-[1] gap-x-2 gap-y-3 sm:grid-cols-3 md:gap-3">
              {['Armor Class', 'Initiative', 'Speed'].map((x) => (
                <Pod key={x} label={x} variant="alt">
                  <PodInput name={camelCase(x)} />
                </Pod>
              ))}
            </div>
          </Pod>
          <Pod className="flex-[2]">
            <div className="flex h-full flex-col gap-x-2 gap-y-3 md:flex-row md:gap-3">
              <Pod className="flex-[2]" label="HP" variant="alt">
                <PodResource name="hitPoints" />
              </Pod>
              <Pod className="flex-[1]" label="Temporary HP" variant="alt">
                <PodInput name="hitPoints.temporary" />
              </Pod>
              <Pod className="flex-[2]" label="Hit Dice" variant="alt">
                <PodResource name="hitDice" />
              </Pod>
            </div>
          </Pod>
          <div className="flex w-full flex-[8] flex-col">
            <CoreTabs />
          </div>
        </div>
        <div className="col-span-1 flex h-full flex-col gap-x-2 gap-y-3 md:gap-3 lg:col-span-2 xl:col-span-1">
          <DeathSavesPod className="flex-[1]" />
          {['Personality Traits', 'Ideals', 'Bonds', 'Flaws'].map((x) => (
            <Pod key={x} label={x}>
              <PodTextarea name={`bio.${camelCase(x)}`} />
            </Pod>
          ))}
          <Pod className="flex-[2]" label="Proficiencies & Languages">
            <div className="flex-stack">
              {['Languages', 'Weapons', 'Armor', 'Other'].map((x) => (
                <Input key={x} label={x} name={`proficiencies.${camelCase(x)}`} />
              ))}
            </div>
          </Pod>
        </div>
      </div>
    </>
  );
};

export { CoreTab };
