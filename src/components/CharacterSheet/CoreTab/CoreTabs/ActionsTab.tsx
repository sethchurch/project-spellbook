'use client';

import { AccordionItem } from '@nextui-org/accordion';
import { Button } from '@nextui-org/button';

import { Pod } from '@/components/CharacterSheet/Pod';
import { Accordion } from '@/components/Elements/Accordion';
import { FormInput } from '@/components/Form/FormInput';
import { Textarea } from '@/components/Form/Textarea';
import type { Attack } from '@/config/CharacterConfig';
import { useFormList } from '@/hooks/useFormList';
import { bonusify } from '@/utils/bonusify';

const fieldName = 'attacks' as const;
const ActionsTab = () => {
  const { dataList: attacks, add } = useFormList<Attack>({ fieldName });
  const addBlank = () => {
    add({ name: '', bonus: 0, damage: '', damageType: '', description: '' });
  };

  return (
    <div className="flex-stack">
      <div className="flex justify-end gap-3">
        <Button radius="sm">Modify Actions</Button>
        <Button color="primary" radius="sm" onClick={addBlank}>
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
                <FormInput label="Name" name={`${parentName}.name`} styleVariant="basic" />
                <FormInput label="Bonus" name={`${parentName}.bonus`} styleVariant="basic" />
                <div className="flex gap-3">
                  <FormInput label="Damage" name={`${parentName}.damage`} styleVariant="basic" />
                  <FormInput label="Damage Type" name={`${parentName}.damageType`} styleVariant="basic" />
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
