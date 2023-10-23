'use client';

import Image from 'next/image';

import { Pod, PodChip, PodResource } from '@/components/CharacterSheet/Pod';
import { ControlledCheck } from '@/components/Form/ControlledCheck';
import { FormInput } from '@/components/Form/FormInput';
import { Textarea } from '@/components/Form/Textarea';
import { camelCase } from '@/utils/camelCase';

import { StatDisplay } from '../StatDisplay';
import { CoreTabs } from './CoreTabs';
import { DeathSavesPod } from './DeathSavesPod';
import { ProficienciesPod } from './ProficienciesPod';

const CoreTab = () => {
  return (
    <>
      <div className="relative h-32 w-full rounded-t-lg bg-gradient-to-r from-violet-700 to-violet-950 md:h-64">
        <Image fill alt="image of character" className="block" sizes="100vw" src="https://picsum.photos/2048/256" />
        <div className=" absolute left-0 top-0 h-full w-full bg-gradient-to-r from-violet-700 to-violet-950 opacity-0 transition-opacity hover:opacity-30" />
      </div>
      <div className="grid grid-cols-1 grid-rows-[1fr_max-content] gap-x-2 gap-y-3 p-2 md:gap-3 md:p-5 lg:grid-cols-[6fr_3fr] xl:grid-cols-[2fr_6fr_2fr]">
        <Pod className="xl:col-span-2" label="Character Details">
          <div className="grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-2 md:grid-cols-3 md:gap-3">
            {['Name', 'Race', 'Experience', 'Class', 'Background', 'Alignment'].map((field) => (
              <FormInput key={field} label={field} name={field.toLowerCase()} styleVariant="basic" />
            ))}
          </div>
        </Pod>
        <Pod className="row-start-1 md:row-start-auto" label="Inspiration & Proficiency Bonus">
          <div className="flex h-full flex-col justify-around gap-x-2 gap-y-3 py-3 md:gap-3">
            <PodChip startContent={<ControlledCheck className="-ml-1 -mr-2" name="inspired" size="md" />}>
              Inspiration
            </PodChip>
            <PodChip left="+2">Proficiency Bonus</PodChip>
          </div>
        </Pod>
        <ProficienciesPod />
        <div className="flex h-full flex-col gap-x-2 gap-y-3 md:gap-3">
          <Pod className="flex-[1]">
            <div className="grid flex-[1] gap-x-2 gap-y-3 sm:grid-cols-3 md:gap-3">
              {['Armor Class', 'Initiative', 'Speed'].map((x) => (
                <Pod key={x} label={x} variant="alt">
                  <FormInput name={camelCase(x)} />
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
                <FormInput name="hitPoints.temporary" />
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
    </>
  );
};

CoreTab.displayName = 'CoreTab';
export { CoreTab };
