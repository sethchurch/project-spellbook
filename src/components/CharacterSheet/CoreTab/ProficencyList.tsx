'use client';

import { Checkbox } from '@nextui-org/checkbox';
import { Chip } from '@nextui-org/chip';
import { useFormContext } from 'react-hook-form';

import { useCheckArray } from '@/components/Form/CheckArrayProvider';
import type { Proficiency } from '@/config/CharacterConfig';
import { capitalize } from '@/utils/capitalize';

import { PodChip } from '../Pod/PodChip';

interface ProficencyListProps {
  proficencyData: Proficiency[];
}

const calculateStatBonus = (stat: number) => {
  return Math.floor(stat / 2) - 5;
};

const statIndexList = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
const ProficencyList = ({ proficencyData }: ProficencyListProps) => {
  const { value: skills, onChange } = useCheckArray();
  const { getValues } = useFormContext();
  const statList = getValues('stats') || [];

  return (
    <div className="flex-stack">
      {statList.length &&
        proficencyData.map(({ name: skill, stat }, index) => {
          const skillName = skill.toLowerCase();
          const statBonus = calculateStatBonus(statList[statIndexList.indexOf(stat)] ?? 0);
          const profBonus = skills?.includes(skillName) ? 2 : 0;
          const bonus = statBonus + profBonus;
          return (
            <PodChip
              key={index}
              startContent={
                <>
                  <Chip className="-ml-1 mr-1 min-w-unit-12 text-center" radius="md">
                    {bonus >= 0 ? `+${bonus}` : bonus}
                  </Chip>
                  <Checkbox
                    className="-ml-1 -mr-2"
                    isSelected={skills?.includes(skillName)}
                    name={skillName}
                    size="md"
                    onChange={onChange}
                  />
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
