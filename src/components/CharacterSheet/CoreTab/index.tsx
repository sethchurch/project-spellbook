import { Tab } from '@nextui-org/react';

import { DeathSavesPod, Pod, PodChip, PodInput, PodResource, PodTextarea } from '@/components/CharacterSheet/Pod';
import { TabList, TabTitle } from '@/components/Elements/TabList';
import { CheckArrayProvider } from '@/components/Form/CheckArrayProvider';
import { ControlledCheck } from '@/components/Form/ControlledCheck';
import { Input } from '@/components/Form/Input';
import type { Proficiency } from '@/config/CharacterConfig';
import { characterSkills, savingThrows } from '@/config/CharacterConfig';
import { characterSheetTitleFields, statNames } from '@/config/dummyData';
import { camelCase } from '@/utils/camelCase';

import { ProficencyList } from './ProficencyList';
import { StatDisplay } from './StatDisplay';
import { ActionsTab } from './Tabs/ActionsTab';
import { FeaturesTab } from './Tabs/FeaturesTab';
import { ResourcesTab } from './Tabs/ResourcesTab';

const CoreTab = () => {
  return (
    <>
      <div className="h-64 w-full rounded-t-lg bg-gradient-to-r from-violet-700 to-violet-950" />
      <div className="p-2 md:p-5">
        <div className="grid grid-rows-[1fr_max-content] gap-x-2 gap-y-3 md:grid-cols-[6fr_3fr] md:gap-3 lg:grid-cols-[3fr_6fr_3fr]">
          <Pod className="lg:col-span-2" label="Character Details">
            <div className="grid grid-cols-2 gap-x-2 gap-y-3 md:grid-cols-3 md:gap-3">
              {characterSheetTitleFields.map((field) => (
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
            <div className="flex w-full flex-nowrap gap-x-2 gap-y-3 md:gap-3">
              <div className="flex-stack flex-[2] justify-start">
                {Array.from(new Array(6)).map((_, index) => (
                  <StatDisplay key={index} label={statNames[index]?.toUpperCase()} statIndex={index} />
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
                    <ProficencyList proficencyData={characterSkills as Proficiency[]} />
                  </CheckArrayProvider>
                </Pod>
              </div>
            </div>
          </Pod>
          <div className="flex h-full flex-col gap-x-2 gap-y-3 md:gap-3">
            <div className="grid flex-[1] grid-cols-3 gap-x-2 gap-y-3 md:gap-3">
              <Pod label="AC">
                <PodInput name="armorClass" />
              </Pod>
              <Pod label="Initiative">
                <PodInput name="initiative" />
              </Pod>
              <Pod label="Speed">
                <PodInput name="speed" />
              </Pod>
            </div>
            <Pod className="flex-[2]">
              <div className="flex h-full flex-col gap-x-2 gap-y-3 md:gap-3 xl:flex-row">
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
              <TabList defaultTab="actions">
                <Tab key="actions" title={<TabTitle>Actions</TabTitle>}>
                  <Pod>
                    <ActionsTab />
                  </Pod>
                </Tab>
                <Tab key="resources" title={<TabTitle>Resources</TabTitle>}>
                  <Pod>
                    <ResourcesTab />
                  </Pod>
                </Tab>
                <Tab key="features" title={<TabTitle>Features</TabTitle>}>
                  <Pod>
                    <FeaturesTab />
                  </Pod>
                </Tab>
                <Tab key="notes" title={<TabTitle>Notes</TabTitle>}>
                  <Pod>
                    <PodTextarea className="h-full" maxRows={64} minRows={24} name="notes" styleVariant="inset" />
                  </Pod>
                </Tab>
              </TabList>
            </div>
          </div>
          <div className="flex h-full flex-col gap-x-2 gap-y-3 md:gap-3">
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
      </div>
    </>
  );
};

export { CoreTab };
