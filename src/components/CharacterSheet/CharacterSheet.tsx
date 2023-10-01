import { characterSheetTitleFields, characterSkills, loremIpsum, savingThrows, statNames } from '@/config/dummyData';
import { capitalize } from '@/utils/capitalize';

import { CharacterSheetProvider } from './CharacterSheetProvider';
import { CheckboxChip } from './Pod/CheckboxChip';
import { Pod } from './Pod/Pod';
import { StatDisplay } from './StatDisplay';

const CharacterSheet = () => {
  return (
    <CharacterSheetProvider>
      <div className="bg-pod-alt m-6 rounded-lg">
        <div className="h-64 w-full rounded-t-lg bg-gradient-to-r from-purple-700 to-purple-950" />
        <div className="p-5">
          <div className="grid grid-cols-[3fr_6fr_3fr] grid-rows-[1fr_max-content] gap-3">
            <Pod labelTop className="col-span-2" label="Character Details">
              <div className="grid grid-cols-3 gap-3">
                {characterSheetTitleFields.map((field) => (
                  <Pod.Input key={field} inputVariant="unstyled" label={field} name={field.toLowerCase()} />
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
                  {Array.from(new Array(6)).map((_, index) => (
                    <StatDisplay key={index} labelTop label={statNames[index]?.toUpperCase()} statIndex={index} />
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
                <Pod label="AC">
                  <Pod.Input name="armorClass" />
                </Pod>
                <Pod label="Initiative">
                  <Pod.Input name="initiative" />
                </Pod>
                <Pod label="Speed">
                  <Pod.Input name="speed" />
                </Pod>
              </div>
              <Pod className="flex-[1]" label="Conditions" />
              <Pod className="flex-[1]">
                <div className="flex h-full gap-3">
                  <Pod label="HP" variant="alt">
                    <Pod.Input name="hitPoints.current" />
                  </Pod>
                  <Pod label="Hit Die" variant="alt">
                    <Pod.Input name="hitDice.current" />
                  </Pod>
                  <Pod label="THP" variant="alt">
                    <Pod.Input name="hitPoints.temporary" />
                  </Pod>
                </div>
              </Pod>
              <Pod className="flex-[4]" label="Actions / Resources / Features / Notes" />
            </div>
            <div className="flex h-full flex-col gap-3">
              <Pod label="Traits">
                <Pod.Textarea name="bio.traits" placeholder={loremIpsum.repeat(2)} />
              </Pod>
              <Pod label="Ideals">
                <Pod.Textarea name="bio.ideals" placeholder={loremIpsum.repeat(2)} />
              </Pod>
              <Pod label="Bonds">
                <Pod.Textarea name="bio.bonds" placeholder={loremIpsum.repeat(2)} />
              </Pod>
              <Pod label="Flaws">
                <Pod.Textarea name="bio.flaws" placeholder={loremIpsum.repeat(2)} />
              </Pod>
              <Pod className="flex-[2]" label="Senses" />
              <Pod className="flex-[2]" label="Proficencies & Languages" />
            </div>
          </div>
        </div>
      </div>
    </CharacterSheetProvider>
  );
};

export { CharacterSheet };
