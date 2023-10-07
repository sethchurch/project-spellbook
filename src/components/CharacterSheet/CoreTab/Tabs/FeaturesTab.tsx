import { AccordionItem } from '@nextui-org/react';
import { IconChevronLeft } from '@tabler/icons-react';
import { useFormContext } from 'react-hook-form';

import { Accordion } from '@/components/Elements/Accordion';

import { PodChip, PodInput, PodTextarea } from '../../Pod';

interface Feature {
  name: string;
  description: string;
  source: string;
}

const FeaturesTab = () => {
  const fieldName = 'features' as const;
  const { getValues } = useFormContext();
  const features = getValues(fieldName);

  return (
    <Accordion styleVariant="podSplit">
      {features.map((feature: Feature, index: number) => (
        <AccordionItem
          key={index}
          indicator={<IconChevronLeft />}
          textValue={feature.name}
          title={
            <div className="flex justify-between">
              <p className="flex-[1] shrink-0">{feature.name}</p>
              <PodChip className="w-min">{feature.source}</PodChip>
            </div>
          }
        >
          <div className="grid w-full grid-cols-2 gap-3">
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
