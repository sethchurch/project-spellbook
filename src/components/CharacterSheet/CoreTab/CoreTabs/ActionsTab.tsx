'use client';

import { AccordionItem } from '@nextui-org/accordion';
import { Button } from '@nextui-org/button';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Pod } from '@/components/CharacterSheet/Pod';
import { Accordion } from '@/components/Elements/Accordion';
import { Input } from '@/components/Form/Input';
import { Textarea } from '@/components/Form/Textarea';
import type { Attack } from '@/config/CharacterConfig';
import { bonusify } from '@/utils/bonusify';

const fieldName = 'attacks' as const;

const ActionsTab = () => {
  const [editMode, setEditMode] = useState(false);
  const { getValues, setValue } = useFormContext();
  const attacks: Attack[] = getValues(fieldName);

  const addAction = () => {
    const newAttack: Attack = {
      name: '',
      bonus: 0,
      damage: '',
      damageType: '',
      description: '',
    };
    setValue(fieldName, [...attacks, newAttack]);
  };

  const removeLastAction = () => {
    setValue(fieldName, attacks.slice(0, -1));
  };

  return (
    <div className="flex-stack">
      <div className="flex  justify-between">
        <Button variant="faded" onClick={removeLastAction}>
          Remove Last Action
        </Button>
        <Button variant="faded" onClick={addAction}>
          Add Action
        </Button>
      </div>
      <Accordion styleVariant="podSplit">
        {attacks?.map(({ name, bonus = 0, damage, damageType }, index) => {
          const parentName = `${fieldName}[${index}]`;
          return (
            <AccordionItem
              key={index}
              classNames={{ base: 'p-0 group-[.is-splitted]:px-2 group-[.is-splitted]:shadow-none' }}
              textValue={name}
              title={
                <div className="grid w-full grid-cols-[5fr_2fr_5fr] gap-2">
                  <Pod isCompact className="truncate">
                    {name}
                  </Pod>
                  <Pod isCompact className="text-center">
                    {bonusify(bonus)}
                  </Pod>
                  <Pod isCompact className="truncate">
                    {damage} {damageType}
                  </Pod>
                </div>
              }
            >
              <div className="flex-stack">
                <Input label="Name" name={`${parentName}.name`} styleVariant="basic" />
                <Input label="Bonus" name={`${parentName}.bonus`} styleVariant="basic" />
                <div className="flex gap-3">
                  <Input label="Damage" name={`${parentName}.damage`} styleVariant="basic" />
                  <Input label="Damage Type" name={`${parentName}.damageType`} styleVariant="basic" />
                </div>
                <Textarea label="Description" name={`${parentName}.description`} styleVariant="basic" />
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export { ActionsTab };
