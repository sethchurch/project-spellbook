'use client';

import { Checkbox } from '@nextui-org/checkbox';
import { Chip } from '@nextui-org/chip';
import { IconLetterE, IconLetterP } from '@tabler/icons-react';
import { capitalize, toArray } from 'lodash';
import type React from 'react';
import { useFormContext } from 'react-hook-form';

import { PodChip } from '@/components/Elements/Pod';
import type { Proficiency, ProficientOrExpertList } from '@/config/CharacterConfig';
import { bonusify, getProficencyBonus } from '@/features/characters/utils/characterUtils';

interface ProficencyListProps {
  proficencyData: Proficiency[];
  name: string;
  allowExpertise?: boolean;
}

const calculateStatBonus = (stat: number) => {
  return Math.floor(stat / 2) - 5;
};

const statIndexList = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
const ProficencyList = ({ allowExpertise, name, proficencyData }: ProficencyListProps) => {
  const { getValues, setValue } = useFormContext();
  const skillData = getValues(name) as ProficientOrExpertList;
  const { proficent, expert } = skillData || {};
  const statList = getValues('stats') || [];
  const proficencyBonus = getProficencyBonus(getValues('level'));

  const getOnChange = (skill: string, sourceList: string[], key: string) => {
    return ({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) => {
      const skillList = toArray(sourceList);
      const newSkills = checked ? [...skillList, skill] : skillList.filter((item) => item !== skill);
      setValue(name, { ...skillData, [key]: newSkills });
    };
  };

  const getPOnChange = (skill: string) => {
    if (!allowExpertise) return getOnChange(skill, proficent, 'proficent');
    return ({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) => {
      const [pList, eList] = [toArray(proficent), toArray(expert)];
      const newSkills = checked ? [...pList, skill] : pList.filter((item) => item !== skill);
      const newExpert = checked ? eList.filter((item) => item !== skill) : [...eList, skill];
      setValue(name, { ...skillData, proficent: newSkills, expert: newExpert });
    };
  };

  const getEOnChange = (skill: string) => {
    return ({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) => {
      const [pList, eList] = [toArray(proficent), toArray(expert)];
      const newSkills = checked ? pList : pList.filter((item) => item !== skill);
      const newExpert = checked ? eList : eList.filter((item) => item !== skill);
      setValue(name, { ...skillData, expert: newExpert, proficent: newSkills });
    };
  };

  return (
    <div className="flex-stack">
      {statList.length
        ? proficencyData.map(({ name: skill, stat }, index) => {
            const skillName = skill.toLowerCase();
            const statBonus = calculateStatBonus(statList[statIndexList.indexOf(stat)] ?? 0);
            const expertFlag = expert?.includes(skillName);
            const proficentFlag = proficent?.includes(skillName);
            const proficencyMultiplier = expertFlag ? 2 : 1;
            const profBonus = proficentFlag || expertFlag ? proficencyBonus * proficencyMultiplier : 0;
            const bonus = statBonus + profBonus;
            return (
              <PodChip
                key={index}
                startContent={
                  <>
                    <Chip className="-ml-1 mr-1 text-center" radius="md">
                      {bonusify(bonus)}
                    </Chip>
                    {!expertFlag ? (
                      <Checkbox
                        className="-ml-1 -mr-2"
                        icon={<IconLetterP stroke={4} />}
                        isSelected={proficentFlag}
                        name={skillName}
                        size="md"
                        onChange={getPOnChange(skillName)}
                      />
                    ) : null}
                    {allowExpertise && expertFlag ? (
                      <Checkbox
                        className="-ml-1 -mr-2"
                        color="secondary"
                        icon={<IconLetterE stroke={4} />}
                        isSelected={expertFlag}
                        name={skillName}
                        size="md"
                        onChange={getEOnChange(skillName)}
                      />
                    ) : null}
                  </>
                }
              >
                {capitalize(skill)}
              </PodChip>
            );
          })
        : null}
    </div>
  );
};

export { ProficencyList };
