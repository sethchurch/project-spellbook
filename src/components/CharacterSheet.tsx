import { Badge, Grid, GridCol, Paper, Radio, Space, Stack, TextInput } from '@mantine/core';

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

const CharacterSheet = () => {
  return (
    <Paper bg="dark.8" className="h-full" p="xl">
      <div className="grid grid-cols-[6fr_2fr] gap-5">
        <CharacterSheetPod className="grid grid-cols-3 gap-6">
          <TextInput label="Name" />
          <TextInput label="Race" />
          <TextInput label="Experience" />
          <TextInput label="Class" />
          <TextInput label="Background" />
          <TextInput label="Alignment" />
        </CharacterSheetPod>
        <CharacterSheetPod className="flex flex-col justify-center gap-6">
          <Radio label="Inspiration" />
          <Radio label="Proficiency Bonus" />
        </CharacterSheetPod>
      </div>

      <Space h="xl" />

      <Grid grow>
        <GridCol span={3}>
          <CharacterSheetPod>
            <div className="flex w-full flex-nowrap gap-4">
              <CharacterSheetPod className="flex-[2]" variant="transparent">
                <Stack>
                  {characterStats.map((stat, index) => (
                    <StatDisplay key={index} stat={stat} />
                  ))}
                </Stack>
              </CharacterSheetPod>

              <CharacterSheetPod className="flex-[4]" variant="transparent">
                <div className="flex h-full flex-col gap-4">
                  <CharacterSheetPod className="flex-[2]" variant="alt">
                    <div className="flex h-full flex-col justify-between">
                      {savingThrows.map((save, index) => (
                        <Badge key={index} color="gray" variant="dot">
                          {save} Save
                        </Badge>
                      ))}
                    </div>
                  </CharacterSheetPod>
                  <CharacterSheetPod className="flex-[6]" variant="alt">
                    <div className="flex h-full flex-col justify-between">
                      {characterSkills.map((skill, index) => (
                        <Badge key={index} className="w-full" color="gray" variant="dot">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CharacterSheetPod>
                </div>
              </CharacterSheetPod>
            </div>
          </CharacterSheetPod>
        </GridCol>

        <GridCol span={6}>
          <div className="flex h-full flex-col  gap-5 ">
            <div className="flex w-full flex-[1] justify-between gap-6">
              <CharacterSheetPod className="aspect-square text-center">AC</CharacterSheetPod>
              <CharacterSheetPod className="aspect-square text-center">Initiative</CharacterSheetPod>
              <CharacterSheetPod className="aspect-square text-center">Speed</CharacterSheetPod>
            </div>
            <CharacterSheetPod className="flex-[1]">Conditions</CharacterSheetPod>
            <CharacterSheetPod className="flex-[1]">HP / THP</CharacterSheetPod>
            <CharacterSheetPod className="flex-[4]">Actions / Resources / Features / Notes</CharacterSheetPod>
          </div>
        </GridCol>
        <GridCol span={3}>
          <div className="flex h-full flex-col gap-5">
            <CharacterSheetPod>Traits</CharacterSheetPod>
            <CharacterSheetPod>Ideals</CharacterSheetPod>
            <CharacterSheetPod>Bonds</CharacterSheetPod>
            <CharacterSheetPod>Flaws</CharacterSheetPod>
            <CharacterSheetPod className="flex-[2]">Senses</CharacterSheetPod>
            <CharacterSheetPod className="flex-[2]">Proficencies & Languages</CharacterSheetPod>
          </div>
        </GridCol>
      </Grid>
    </Paper>
  );
};

export { CharacterSheet };
