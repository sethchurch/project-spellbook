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
      {attacks.map(({ name, bonus = 0, damage, damageType }, index) => {
        const parentName = `${fieldName}[${index}]`;

        return (
          <AccordionItem
            key={index}
            classNames={{ base: 'p-0 group-[.is-splitted]:px-2 group-[.is-splitted]:shadow-none' }}
            indicator={<IconChevronLeft />}
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
              <PodInput label="Name" name={`${parentName}.name`} styleVariant="unstyled" />
              <PodInput label="Bonus" name={`${parentName}.bonus`} styleVariant="unstyled" />
              <div className="flex gap-3">
                <PodInput label="Damage" name={`${parentName}.damage`} styleVariant="unstyled" />
                <PodInput label="Damage Type" name={`${parentName}.damageType`} styleVariant="unstyled" />
              </div>
              <PodTextarea label="Description" name={`${parentName}.description`} styleVariant="unstyled" />
            </div>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export { ActionsTab };
