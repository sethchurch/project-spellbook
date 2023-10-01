import { Chip } from '@nextui-org/chip';
import { Checkbox } from '@nextui-org/react';
import type { ChangeEvent } from 'react';

import { characterSkills } from '@/config/dummyData';
import { capitalize } from '@/utils/capitalize';

import { useCheckArray } from '../Form/CheckArrayProvider';
import { Pod } from './Pod/Pod';

const SkillList = () => {
  const [skills, dispatch] = useCheckArray();

  const updateSkillOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      dispatch({ type: 'checked', payload: name });
    } else {
      dispatch({ type: 'unchecked', payload: name });
    }
  };

  return (
    <div className="flex-stack">
      {characterSkills.map((skill, index) => (
        <Pod.Chip
          key={index}
          startContent={
            <>
              <Chip className="-ml-1 mr-1 min-w-unit-12 text-center" radius="md">
                {`+${index}`}
              </Chip>
              <Checkbox
                className="-ml-1 -mr-2"
                isSelected={skills.includes(skill.toLowerCase())}
                name={skill.toLowerCase()}
                size="md"
                onChange={updateSkillOnChange}
              />
            </>
          }
        >
          {capitalize(skill)}
        </Pod.Chip>
      ))}
    </div>
  );
};

export { SkillList };
