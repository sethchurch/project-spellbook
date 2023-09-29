import { Chip } from '@nextui-org/chip';
import { Input } from '@nextui-org/input';
import { Checkbox } from '@nextui-org/react';

import { CharacterSheetPod } from '@/components/CharacterSheetPod';
import { StatDisplay } from '@/components/StatDisplay';
import {
  characterSheetTitleFields,
  characterSkills,
  characterStats,
  savingThrows,
  statNames,
} from '@/config/dummyData';

const CharacterSheet = () => {
  return (
    <div className="bg-pod-alt m-6 rounded p-5">
      <div className="grid grid-cols-[3fr_6fr_3fr] grid-rows-[1fr_max-content] gap-3">
        <CharacterSheetPod labelTop className="col-span-2" label="Character Details">
          <div className="grid grid-cols-3 gap-3">
            {characterSheetTitleFields.map((field) => (
              <Input key={field} label={field} />
            ))}
          </div>
        </CharacterSheetPod>

        <CharacterSheetPod className="flex flex-col justify-center gap-3" label="Inspiration & Proficiency Bonus" />

        <CharacterSheetPod>
          <div className="flex w-full flex-nowrap gap-3">
            <div className="flex-stack flex-[2] justify-start">
              {characterStats.map((stat, index) => (
                <StatDisplay key={index} labelTop label={statNames[index]?.toUpperCase()} stat={stat} />
              ))}
            </div>
            <div className="flex h-full flex-[4] flex-col gap-3">
              <CharacterSheetPod labelTop className="flex-[2]" label="Saving Throws" variant="alt">
                <div className="flex-stack">
                  {savingThrows.map((save, index) => (
                    <Chip
                      key={index}
                      className="w-full max-w-full text-center"
                      radius="md"
                      startContent={<Checkbox className="-ml-1 -mr-3" radius="sm" size="sm" />}
                      variant="faded"
                    >
                      {`${save?.[0]?.toUpperCase()}${save.slice(1)}`} Save
                    </Chip>
                  ))}
                </div>
              </CharacterSheetPod>
              <CharacterSheetPod labelTop className="flex-[6]" label="Skills" variant="alt">
                <div className="flex-stack">
                  {characterSkills.map((skill, index) => (
                    <Chip
                      key={index}
                      className="w-full max-w-full text-center"
                      radius="md"
                      startContent={<Checkbox className="-ml-1 -mr-3" radius="sm" size="sm" />}
                      variant="faded"
                    >
                      {`${skill?.[0]?.toUpperCase()}${skill.slice(1)}`}
                    </Chip>
                  ))}
                </div>
              </CharacterSheetPod>
            </div>
          </div>
        </CharacterSheetPod>

        <div className="flex h-full flex-col  gap-3">
          <div className="grid flex-[1] grid-cols-3 gap-3">
            <CharacterSheetPod label="AC" />
            <CharacterSheetPod label="Initiative" />
            <CharacterSheetPod label="Speed" />
          </div>
          <CharacterSheetPod className="flex-[1]" label="Conditions" />
          <CharacterSheetPod className="flex-[1]" label="HP / THP" />
          <CharacterSheetPod className="flex-[4]" label="Actions / Resources / Features / Notes" />
        </div>

        <div className="flex h-full flex-col gap-3">
          <CharacterSheetPod label="Traits">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum orci quis tincidunt fermentum.
            Nullam at quam in dolor vestibulum porttitor at in sem. Etiam lectus quam, placerat ut neque.
          </CharacterSheetPod>
          <CharacterSheetPod label="Ideals">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum orci quis tincidunt fermentum.
            Nullam at quam in dolor vestibulum porttitor at in sem. Etiam lectus quam, placerat ut neque.
          </CharacterSheetPod>
          <CharacterSheetPod label="Bonds">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum orci quis tincidunt fermentum.
            Nullam at quam in dolor vestibulum porttitor at in sem. Etiam lectus quam, placerat ut neque.
          </CharacterSheetPod>
          <CharacterSheetPod label="Flaws">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum orci quis tincidunt fermentum.
            Nullam at quam in dolor vestibulum porttitor at in sem. Etiam lectus quam, placerat ut neque.
          </CharacterSheetPod>
          <CharacterSheetPod className="flex-[2]" label="Senses" />
          <CharacterSheetPod className="flex-[2]" label="Proficencies & Languages" />
        </div>
      </div>
    </div>
  );
};

export { CharacterSheet };
