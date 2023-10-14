'use client';

import { AccordionItem } from '@nextui-org/accordion';
import { IconChevronLeft } from '@tabler/icons-react';
import { useFormContext } from 'react-hook-form';

import { Pod, PodInput, PodTextarea } from '@/components/CharacterSheet/Pod';
import { Accordion } from '@/components/Elements/Accordion';
import type { Attack } from '@/config/CharacterConfig';
import { bonusify } from '@/utils/bonusify';

const fieldName = 'attacks' as const;

const ActionsTab = () => {
  const { getValues } = useFormContext();
  const attacks: Attack[] = getValues(fieldName);

  return (
    <Accordion styleVariant="podSplit">
      {attacks.map(({ name, bonus = 0, damage, damageType }, index) => (
        <AccordionItem
          key={index}
          classNames={{
            base: 'p-0 group-[.is-splitted]:px-2 group-[.is-splitted]:shadow-none',
          }}
          indicator={<IconChevronLeft />}
          textValue={name}
          title={
            <div>
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
            </div>
          }
        >
          <div className="flex-stack">
            <PodInput label="Name" name={`${fieldName}[${index}].name`} styleVariant="unstyled" />
            <PodInput label="Bonus" name={`${fieldName}[${index}].bonus`} styleVariant="unstyled" />
            <div className="flex gap-3">
              <PodInput label="Damage" name={`${fieldName}[${index}].damage`} styleVariant="unstyled" />
              <PodInput label="Damage Type" name={`${fieldName}[${index}].damageType`} styleVariant="unstyled" />
            </div>

            <PodTextarea label="Description" name={`${fieldName}[${index}].description`} styleVariant="unstyled" />
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export { ActionsTab };
