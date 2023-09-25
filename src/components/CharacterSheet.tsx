import { CharacterSheetPod } from '@/components/CharacterSheetPod';
import { RadioGroup, Radio } from '@nextui-org/radio';

import { StatDisplay } from './StatDisplay';
import { Input } from '@nextui-org/input';
import { Chip } from '@nextui-org/chip';
import { Stack } from '@/components/layout/Stack';

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

const CharacterSheet = () => {
  return (
    <div className="h-full p-10 bg-zinc-900 m-10 rounded">
      <div className="grid grid-cols-[3fr_6fr_3fr] gap-3 grid-rows-[1fr_max-content]">
        <CharacterSheetPod className="grid grid-cols-3 gap-3 col-span-2">
          <Input label="Name" />
          <Input label="Race" />
          <Input label="Experience" />
          <Input label="Class" />
          <Input label="Background" />
          <Input label="Alignment" />
        </CharacterSheetPod>
        <CharacterSheetPod className="flex flex-col justify-center gap-3">
          <RadioGroup>
            <Radio value="inspo">Inspiration</Radio>
            <Radio value="profs">Proficiency Bonus</Radio>
          </RadioGroup>
        </CharacterSheetPod>

        <div>
          <CharacterSheetPod>
            <div className="flex w-full flex-nowrap gap-3">
              <div className="flex-[2]">
                <Stack>
                  {characterStats.map((stat, index) => (
                    <StatDisplay key={index} stat={stat} />
                  ))}
                </Stack>
              </div>
              <div className="flex h-full flex-col gap-3 flex-[4]">
                <CharacterSheetPod className="flex-[2]" variant="alt">
                  <Stack>
                    {savingThrows.map((save, index) => (
                      <Chip key={index}>{save} save</Chip>
                    ))}
                  </Stack>
                </CharacterSheetPod>
                <CharacterSheetPod className="flex-[6]" variant="alt">
                  <Stack>
                    {characterSkills.map((skill, index) => (
                      <Chip key={index} className="w-full">
                        {skill}
                      </Chip>
                    ))}
                  </Stack>
                </CharacterSheetPod>
              </div>
            </div>
          </CharacterSheetPod>
        </div>

        <div>
          <div className="flex h-full flex-col  gap-3">
            <div className="flex-[1] grid grid-cols-3 gap-3">
              <CharacterSheetPod className="aspect-square text-center">AC</CharacterSheetPod>
              <CharacterSheetPod className="aspect-square text-center">Initiative</CharacterSheetPod>
              <CharacterSheetPod className="aspect-square text-center">Speed</CharacterSheetPod>
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
