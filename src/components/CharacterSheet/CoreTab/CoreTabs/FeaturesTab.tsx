'use client';

import { AccordionItem } from '@nextui-org/accordion';
import { useFormContext } from 'react-hook-form';

import { PodChip } from '@/components/CharacterSheet/Pod';
import { Accordion } from '@/components/Elements/Accordion';
import { FormInput } from '@/components/Form/FormInput';
import { Textarea } from '@/components/Form/Textarea';

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
      {features.map(({ name, source }, index: number) => {
        const parentName = `${fieldName}[${index}]`;
        return (
          <AccordionItem
            key={index}
            textValue={name}
            title={
              <div className="grid grid-cols-1 grid-rows-2 truncate md:grid-cols-[2fr_1fr] md:grid-rows-1">
                <p className="truncate px-1">{name}</p>
                <PodChip className="md:w-min md:justify-self-end">{source}</PodChip>
              </div>
            }
          >
            <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
              <FormInput label="Name" name={`${parentName}.name]`} styleVariant="basic" />
              <FormInput label="Source" name={`${parentName}.source]`} styleVariant="basic" />
              <Textarea
                className="col-span-2"
                label="Description"
                name={`${parentName}.description`}
                styleVariant="basic"
              />
            </div>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export { FeaturesTab };
