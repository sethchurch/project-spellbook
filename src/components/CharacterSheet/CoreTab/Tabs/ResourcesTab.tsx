import { AccordionItem, Button } from '@nextui-org/react';
import { IconChevronLeft, IconMinus, IconPlus } from '@tabler/icons-react';
import { useFormContext } from 'react-hook-form';

import { Accordion } from '@/components/Elements/Accordion';

import { PodInput } from '../../Pod';

interface Resource {
  name: string;
  source: string;
  current: number;
  max: number;
}

type ResourceAction = 'increment' | 'decrement';

const ResourcesTab = () => {
  const fieldName = 'resources' as const;
  const { getValues, setValue } = useFormContext();
  const resources = getValues(fieldName);

  const handleResourceButtonClick = (index: number, action: ResourceAction) => {
    const resource = resources[index];
    const { current, max } = resource;
    const increment = action === 'increment' ? 1 : -1;
    const newValue = Math.min(Math.max(+current + increment, 0), max);

    setValue(`${fieldName}[${index}].current`, newValue.toString());
  };

  return (
    <Accordion selectionMode="multiple" styleVariant="podSplit">
      {resources.map((resource: Resource, index: number) => (
        <AccordionItem
          key={index}
          indicator={<IconChevronLeft />}
          textValue={resource.name}
          title={
            <div className="flex gap-6">
              <div className="flex w-full flex-[10] flex-col justify-center gap-x-6 gap-y-3 text-[1rem]">
                <p className="col-span-2">{resource.name}</p>
              </div>
            </div>
          }
        >
          <div className="grid w-full grid-cols-2 gap-3">
            <PodInput label="Name" name={`${fieldName}[${index}].name`} styleVariant="unstyled" />
            <PodInput label="Source" name={`${fieldName}[${index}].source`} styleVariant="unstyled" />
            <PodInput label="Current" name={`${fieldName}[${index}].current`} styleVariant="centered" type="number" />
            <PodInput label="Max" name={`${fieldName}[${index}].max`} styleVariant="centered" type="number" />
            <Button className="h-full p-3" variant="flat" onClick={() => handleResourceButtonClick(index, 'decrement')}>
              <IconMinus size={24} />
            </Button>
            <Button className="h-full p-3" variant="flat" onClick={() => handleResourceButtonClick(index, 'increment')}>
              <IconPlus size={24} />
            </Button>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export { ResourcesTab };
