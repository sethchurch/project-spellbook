'use client';

import { AccordionItem } from '@nextui-org/accordion';
import { Textarea } from '@nextui-org/input';
import { IconChevronLeft } from '@tabler/icons-react';
import { useFormContext } from 'react-hook-form';

import { Pod } from '@/components/CharacterSheet/Pod';
import { Accordion } from '@/components/Elements/Accordion';
import type { Attack } from '@/config/CharacterConfig';

const fieldName = 'attacks' as const;

const ActionsTab = () => {
  const { getValues } = useFormContext();
  const attacks = getValues(fieldName) as Attack[];

  return (
    <Accordion styleVariant="podSplit">
      {attacks.map(({ name, bonus = 0, damage, damageType, description }) => (
        <AccordionItem
          key={name}
          classNames={{
            base: 'p-0 group-[.is-splitted]:px-2',
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
                  {bonus > 0 ? `+${bonus}` : bonus.toString()}
                </Pod>
                <Pod isCompact className="truncate">
                  {damage} {damageType}
                </Pod>
              </div>
            </div>
          }
        >
          <Textarea value={description} />
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export { ActionsTab };
