'use client';

import { AccordionItem } from '@nextui-org/accordion';
import { IconChevronLeft } from '@tabler/icons-react';
import { useFormContext } from 'react-hook-form';

import { PodChip, PodInput, PodTextarea } from '@/components/CharacterSheet/Pod';
import { Accordion } from '@/components/Elements/Accordion';

interface Feature {
  name: string;
  description: string;
  source: string;
}

const fieldName = 'features' as const;

const FeaturesTab = () => {
  const { getValues } = useFormContext();
  const features: Feature[] = getValues(fieldName);

  return (
    <Accordion styleVariant="podSplit">
      {features.map(({ name, source }, index: number) => (
        <AccordionItem
          key={index}
          indicator={<IconChevronLeft />}
          textValue={name}
          title={
            <div className="grid grid-cols-1 grid-rows-2 truncate md:grid-cols-[2fr_1fr] md:grid-rows-1">
              <p className="truncate px-1">{name}</p>
              <PodChip className="md:w-min md:justify-self-end">{source}</PodChip>
            </div>
          }
        >
          <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
            <PodInput label="Name" name={`${fieldName}[${index}.name]`} styleVariant="unstyled" />
            <PodInput label="Source" name={`${fieldName}[${index}.source]`} styleVariant="unstyled" />
            <PodTextarea
              className="col-span-2"
              label="Description"
              name={`${fieldName}[${index}.description]`}
              styleVariant="unstyled"
            />
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export { FeaturesTab };
