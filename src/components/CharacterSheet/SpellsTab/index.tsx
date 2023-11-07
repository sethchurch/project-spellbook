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
const spellCols = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9],
];

const SpellsTab = () => {
  const { dataList: attacks, remove } = useFormList<Attack>({ fieldName });
  const { getAccordionItemProps } = useEditableAccordion({ remove });

  return (
    <div className="flex-stack p-3">
      <Pod classNames={{ content: 'grid grid-cols-3 gap-3' }}>
        <Pod variant="alt">13</Pod>
        <Pod variant="alt">13</Pod>
        <Pod variant="alt">13</Pod>
      </Pod>
      <div className="grid grid-flow-col grid-cols-3 items-start gap-3">
        {spellCols.map((col, i) => (
          <div key={i} className="flex flex-col gap-3">
            {col.map((level) => (
              <Pod key={level} label={level === 0 ? 'Cantrips' : `Level ${level}`}>
                <Accordion styleVariant="podSplit">
                  {attacks?.map(({ name, damage, damageType }, index, _, parentName = `${fieldName}[${index}]`) => (
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
                  ))}
                </Accordion>
              </Pod>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export { SpellsTab };
