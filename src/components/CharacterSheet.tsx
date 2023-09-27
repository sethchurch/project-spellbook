import { Chip } from '@nextui-org/chip';
import { Input } from '@nextui-org/input';
import { Checkbox } from '@nextui-org/react';

import { CharacterSheetPod } from '@/components/CharacterSheetPod';

import { StatDisplay } from './StatDisplay';

const characterStats = [12, 16, 14, 8, 15, 11];
const characterSkills = [
  'athletics',
  'acrobatics',
  'sleight of hand',
  'stealth',
  'arcana',
  'history',
  'investigation',
  'nature',
  'religion',
  'animal handling',
  'insight',
  'medicine',
  'perception',
  'survival',
  'deception',
  'intimidation',
  'performance',
  'persuasion',
];
const savingThrows = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
const characterSheetTitleFields = ['Name', 'Race', 'Experience', 'Class', 'Background', 'Alignment'];

const CharacterSheet = () => {
  return (
    <div className="bg-pod-alt m-6 rounded p-5">
      <div className="grid grid-cols-[3fr_6fr_3fr] grid-rows-[1fr_max-content] gap-3">
        <CharacterSheetPod className="col-span-2 grid grid-cols-3 gap-3">
          {characterSheetTitleFields.map((field) => (
            <Input key={field} label={field} />
          ))}
        </CharacterSheetPod>
        <CharacterSheetPod className="flex flex-col justify-center gap-3">
          Inspiration & Proficiency Bonus
        </CharacterSheetPod>
        <div>
          <CharacterSheetPod>
            <div className="flex w-full flex-nowrap gap-3">
              <div className="flex-[2]">
                <div className="flex-stack">
                  {characterStats.map((stat, index) => (
                    <StatDisplay key={index} stat={stat} />
                  ))}
                </div>
              </div>
              <div className="flex h-full flex-[4] flex-col gap-3">
                <CharacterSheetPod className="flex-[2]" variant="alt">
                  <div className="flex-stack">
                    {savingThrows.map((save, index) => (
                      <Chip key={index} startContent={<Checkbox className="-mr-4" radius="full" size="sm" />}>
                        {save} save
                      </Chip>
                    ))}
                  </div>
                </CharacterSheetPod>
                <CharacterSheetPod className="flex-[6]" variant="alt">
                  <div className="flex-stack">
                    {characterSkills.map((skill, index) => (
                      <Chip key={index} startContent={<Checkbox className="-mr-4" radius="full" size="sm" />}>
                        {skill}
                      </Chip>
                    ))}
                  </div>
                </CharacterSheetPod>
              </div>
            </div>
          </CharacterSheetPod>
        </div>

        <div>
          <div className="flex h-full flex-col  gap-3">
            <div className="grid flex-[1] grid-cols-3 gap-3">
              <CharacterSheetPod>AC</CharacterSheetPod>
              <CharacterSheetPod>Initiative</CharacterSheetPod>
              <CharacterSheetPod>Speed</CharacterSheetPod>
            </div>
            <CharacterSheetPod className="flex-[1]">Conditions</CharacterSheetPod>
            <CharacterSheetPod className="flex-[1]">HP / THP</CharacterSheetPod>
            <CharacterSheetPod className="flex-[4]">Actions / Resources / Features / Notes</CharacterSheetPod>
          </div>
        </div>

        <div>
          <div className="flex h-full flex-col gap-3">
            <CharacterSheetPod>Traits</CharacterSheetPod>
            <CharacterSheetPod>Ideals</CharacterSheetPod>
            <CharacterSheetPod>Bonds</CharacterSheetPod>
            <CharacterSheetPod>Flaws</CharacterSheetPod>
            <CharacterSheetPod className="flex-[2]">Senses</CharacterSheetPod>
            <CharacterSheetPod className="flex-[2]">Proficencies & Languages</CharacterSheetPod>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CharacterSheet };
