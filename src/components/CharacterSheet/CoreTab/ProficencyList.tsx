import { Chip } from '@nextui-org/chip';
import { Checkbox } from '@nextui-org/react';

import { capitalize } from '@/utils/capitalize';

import { useCheckArray } from '../../Form/CheckArrayProvider';
import { PodChip } from '../Pod/PodChip';

interface ProficencyListProps {
  proficencyNames: string[];
}

const ProficencyList = ({ proficencyNames }: ProficencyListProps) => {
  const { value: skills, onChange } = useCheckArray();

  // TODO - show proficency bonus correctly based on stat calculation

  return (
    <div className="flex-stack">
      {proficencyNames.map((skill, index) => {
        const skillName = skill.toLowerCase();
        return (
          <PodChip
            key={index}
            startContent={
              <>
                <Chip className="-ml-1 mr-1 min-w-unit-12 text-center" radius="md">
                  {`+${index}`}
                </Chip>
                <Checkbox
                  className="-ml-1 -mr-2"
                  isSelected={skills.includes(skillName)}
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
