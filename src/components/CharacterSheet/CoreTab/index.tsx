import { DeathSavesPod, Pod, PodChip, PodInput, PodResource, PodTextarea } from '@/components/CharacterSheet/Pod';
import { CheckArrayProvider } from '@/components/Form/CheckArrayProvider';
import { ControlledCheck } from '@/components/Form/ControlledCheck';
import { Input } from '@/components/Form/Input';
import type { Proficiency } from '@/config/CharacterConfig';
import { characterSkills, savingThrows } from '@/config/CharacterConfig';
import { camelCase } from '@/utils/camelCase';

import { CoreTabs } from './CoreTabs';
import { ProficencyList } from './ProficencyList';
import { StatDisplay } from './StatDisplay';

const CoreTab = () => {
  return (
    <>
      <div className="h-64 w-full rounded-t-lg bg-gradient-to-r from-violet-700 to-violet-950" />
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
                  {/* TODO: Handle expertise */}
                  <ProficencyList proficencyData={characterSkills as Proficiency[]} />
                </CheckArrayProvider>
              </Pod>
            </div>
          </div>
        </Pod>
        <div className="flex h-full flex-col gap-x-2 gap-y-3 md:gap-3">
          <div className="grid flex-[1] grid-cols-3 gap-x-2 gap-y-3 md:gap-3">
            {['Armor Class', 'Initiative', 'Speed'].map((x) => (
              <Pod key={x} label={x}>
                <PodInput name={camelCase(x)} />
              </Pod>
            ))}
          </div>
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
