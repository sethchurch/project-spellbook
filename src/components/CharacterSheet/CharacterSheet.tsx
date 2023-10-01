import { Input } from '@nextui-org/input';

import {
  characterSheetTitleFields,
  characterSkills,
  characterStats,
  loremIpsum,
  savingThrows,
  statNames,
} from '@/config/dummyData';
import { capitalize } from '@/utils/capitalize';

import { CheckboxChip } from './Pod/CheckboxChip';
import { Pod } from './Pod/Pod';
import { TextareaPod } from './Pod/TextareaPod';
import { TextPod } from './Pod/TextPod';
import { StatDisplay } from './StatDisplay';

const CharacterSheet = () => {
  return (
    <div className="bg-pod-alt m-6 rounded p-5">
      <div className="grid grid-cols-[3fr_6fr_3fr] grid-rows-[1fr_max-content] gap-3">
        <Pod labelTop className="col-span-2" label="Character Details">
          <div className="grid grid-cols-3 gap-3">
            {characterSheetTitleFields.map((field) => (
              <Input key={field} label={field} />
            ))}
          </div>
        </Pod>
        <Pod className="flex flex-col justify-center gap-3" label="Inspiration & Proficiency Bonus">
          <div className="flex h-full flex-col justify-around">
            <CheckboxChip>Inspiration</CheckboxChip>
            <CheckboxChip>Proficiency Bonus</CheckboxChip>
          </div>
        </Pod>
        <Pod>
          <div className="flex w-full flex-nowrap gap-3">
            <div className="flex-stack flex-[2] justify-start">
              {characterStats.map((stat, index) => (
                <StatDisplay key={index} labelTop label={statNames[index]?.toUpperCase()} stat={stat} />
              ))}
            </div>
            <div className="flex h-full flex-[4] flex-col gap-3">
              <Pod labelTop className="flex-[2]" label="Saving Throws" variant="alt">
                <div className="flex-stack">
                  {savingThrows.map((save, index) => (
                    <CheckboxChip key={index}>{capitalize(save)} Save</CheckboxChip>
                  ))}
                </div>
              </Pod>
              <Pod labelTop className="flex-[6]" label="Skills" variant="alt">
                <div className="flex-stack">
                  {characterSkills.map((skill, index) => (
                    <CheckboxChip key={index}>{capitalize(skill)}</CheckboxChip>
                  ))}
                </div>
              </Pod>
            </div>
          </div>
        </Pod>
        <div className="flex h-full flex-col gap-3">
          <div className="grid flex-[1] grid-cols-3 gap-3">
            <TextPod label="AC" />
            <TextPod label="Initiative" />
            <TextPod label="Speed" />
          </div>
          <Pod className="flex-[1]" label="Conditions" />
          <Pod className="flex-[1]">
            <div className="flex h-full gap-3">
              <TextPod label="HP" variant="alt" />
              <TextPod label="Hit Die" variant="alt" />
              <TextPod label="THP" variant="alt" />
            </div>
          </Pod>
          <Pod className="flex-[4]" label="Actions / Resources / Features / Notes" />
        </div>
        <div className="flex h-full flex-col gap-3">
          <TextareaPod label="Traits" placeholder={loremIpsum.repeat(2)} />
          <TextareaPod label="Ideals" placeholder={loremIpsum.repeat(2)} />
          <TextareaPod label="Bonds" placeholder={loremIpsum.repeat(2)} />
          <TextareaPod label="Flaws" placeholder={loremIpsum.repeat(2)} />
          <Pod className="flex-[2]" label="Senses" />
          <Pod className="flex-[2]" label="Proficencies & Languages" />
        </div>
      </div>
    </div>
  );
};

export { CharacterSheet };
