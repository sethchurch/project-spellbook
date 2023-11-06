'use client';

import { AccordionItem } from '@nextui-org/accordion';

import { Accordion } from '@/components/Elements/Accordion';
import { FormInput } from '@/components/Form/FormInput';
import { Textarea } from '@/components/Form/Textarea';
import type { Attack } from '@/config/CharacterConfig';
import { useEditableAccordion } from '@/hooks/useEditableAccordion';
import { useFormList } from '@/hooks/useFormList';

import { Pod } from '../Pod';

const fieldName = 'attacks' as const;
const SpellsTab = () => {
  const { dataList: attacks, remove } = useFormList<Attack>({ fieldName });
  const { getAccordionItemProps } = useEditableAccordion({ remove });

  return (
    <div className="grid grid-flow-col grid-rows-4 gap-3 p-3">
      {Array.from({ length: 10 }, (_, i) => i).map((level) => (
        <Pod key={level} label={level === 0 ? 'Cantrips' : `Level ${level}`}>
          <Accordion styleVariant="podSplit">
            {attacks?.map(({ name, damage, damageType }, index) => {
              const parentName = `${fieldName}[${index}]`;
              return (
                <AccordionItem
                  {...getAccordionItemProps(index)}
                  key={index}
                  classNames={{ base: 'p-0 group-[.is-splitted]:px-2 group-[.is-splitted]:shadow-none' }}
                  textValue={name}
                  title={
                    <div className="grid w-full grid-cols-[5fr_3fr] gap-2">
                      <Pod isCompact className="truncate">
                        {name}
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
        </Pod>
      ))}
    </div>
  );
};

export { SpellsTab };