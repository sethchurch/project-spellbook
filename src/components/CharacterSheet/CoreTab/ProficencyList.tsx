'use client';

import { Checkbox } from '@nextui-org/checkbox';
import { Chip } from '@nextui-org/chip';
import { IconLetterE, IconLetterP } from '@tabler/icons-react';
import { useFormContext } from 'react-hook-form';

import type { Proficiency, ProficientOrExpertList } from '@/config/CharacterConfig';
import { bonusify } from '@/utils/bonusify';
import { capitalize } from '@/utils/capitalize';
import { getProficencyBonus } from '@/utils/getProficencyBonus';

import { PodChip } from '../Pod/PodChip';

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
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = e.target;
      const skillList = Array.isArray(sourceList) ? sourceList : [sourceList];
      const newSkills = checked ? [...skillList, skill] : skillList.filter((item) => item !== skill);
      setValue(name, { ...skillData, [key]: newSkills });
    };
  };
  const getPOnChange = (skill: string) => {
    return getOnChange(skill, proficent, 'proficent');
  };

  const getEOnChange = (skill: string) => {
    return getOnChange(skill, expert, 'expert');
  };

  return (
    <div className="flex-stack">
      {statList.length &&
        proficencyData.map(({ name: skill, stat }, index) => {
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
                  <Chip className="-ml-1 mr-1 min-w-unit-12 text-center" radius="md">
                    {bonusify(bonus)}
                  </Chip>
                  <Checkbox
                    className="-ml-1 -mr-2"
                    icon={<IconLetterP stroke={4} />}
                    isSelected={proficent?.includes(skillName)}
                    name={skillName}
                    size="md"
                    onChange={getPOnChange(skillName)}
                  />
                  {allowExpertise && (
                    <Checkbox
                      className="-ml-1 -mr-2"
                      color="secondary"
                      icon={<IconLetterE stroke={4} />}
                      isSelected={expert?.includes(skillName)}
                      name={skillName}
                      size="md"
                      onChange={getEOnChange(skillName)}
                    />
                  )}
                </>
              }
            >
              {capitalize(skill)}
            </PodChip>
          );
        })}
    </div>
  );
};

export { ProficencyList };
