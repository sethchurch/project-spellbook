import { AccordionItem } from '@nextui-org/accordion';

import { Pod } from '@/components/CharacterSheet/Pod';
import { Accordion } from '@/components/Elements/Accordion';
import { AddEditButtons } from '@/components/Elements/AddEditButtons';
import { FormInput } from '@/components/Form/FormInput';
import { Textarea } from '@/components/Form/Textarea';
import { DiscardModal } from '@/components/Modal/DiscardModal';
import type { Spell } from '@/config/CharacterConfig';
import { useEditableAccordion } from '@/hooks/useEditableAccordion';
import { useFormList } from '@/hooks/useFormList';

import { defaultSpellOptions } from './spellTabConfig';

interface SpellListProps {
  level: number;
}

const fieldName = 'spells' as const;
const SpellList = ({ level }: SpellListProps) => {
  const { dataList: spells, add, remove } = useFormList<Spell>({ fieldName: `${fieldName}[${level}]` });
  const addBlank = () => add(defaultSpellOptions);
  const { toggleEditing, getAccordionItemProps, getDiscardModalProps } = useEditableAccordion({ remove });

  return (
    <>
      <Accordion styleVariant="podSplit">
        {spells?.map(({ name, damage, damageType }, index, _, parentName = `${fieldName}[${level}][${index}]`) => (
          <AccordionItem
            {...getAccordionItemProps(index)}
            key={index}
            classNames={{ base: 'p-0 group-[.is-splitted]:px-2 group-[.is-splitted]:shadow-none' }}
            textValue={name ?? 'Blank Spell'}
            title={
              <div className="grid w-full grid-cols-[5fr_3fr] gap-2">
                <Pod isCompact className="truncate">
                  {name || 'Blank Spell'}
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
        ))}
      </Accordion>
      <DiscardModal {...getDiscardModalProps()} title="Delete Spell" />
      <div className="flex-stack pt-3">
        <AddEditButtons iconOnly onAdd={addBlank} onEdit={toggleEditing} />
      </div>
    </>
  );
};

export { SpellList };
