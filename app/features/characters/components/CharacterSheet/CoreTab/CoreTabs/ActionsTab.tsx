'use client';

import { AccordionItem } from '@nextui-org/accordion';

import { Accordion } from '@/components/Elements/Accordion';
import { Pod } from '@/components/Elements/Pod';
import { FormInput } from '@/components/Form/FormInput';
import { Textarea } from '@/components/Form/Textarea';
import { DiscardModal } from '@/components/Modal/DiscardModal';
import type { Attack } from '@/config/CharacterConfig';
import { AddEditButtons } from '@/features/characters/components/AddEditButtons';
import { useEditableAccordion } from '@/hooks/useEditableAccordion';
import { useFormList } from '@/hooks/useFormList';
import { bonusify } from '@/utils/bonusify';

import { SpellList } from '../../SpellsTab/SpellList';

const fieldName = 'attacks' as const;
const ActionsTab = () => {
  const { dataList: attacks, add, remove } = useFormList<Attack>({ fieldName });
  const addBlank = () => add({ name: '', bonus: 0, damage: '', damageType: '', description: '' });
  const { isEditing, toggleEditing, getAccordionItemProps, getDiscardModalProps } = useEditableAccordion({ remove });

  return (
    <div className="flex-stack">
      <AddEditButtons itemName="Action" onAdd={addBlank} onEdit={toggleEditing} />
      <Accordion styleVariant="podSplit">
        {attacks?.map(({ name, bonus = 0, damage, damageType }, index) => {
          const parentName = `${fieldName}[${index}]`;
          return (
            <AccordionItem
              {...getAccordionItemProps(index)}
              key={index}
              classNames={{ base: 'p-0 group-[.is-splitted]:px-2 group-[.is-splitted]:shadow-none' }}
              textValue={name}
              title={
                <div className="grid w-full grid-cols-[7fr_3fr_5fr] gap-2">
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
              <div className="flex-stack p-1">
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
      {!isEditing
        ? Array.from({ length: 10 }).map((_, index) => {
            return <SpellList key={index} actionsOnly level={index} />;
          })
        : null}
      <DiscardModal {...getDiscardModalProps()} title="Delete Action" />
    </div>
  );
};

export { ActionsTab };
