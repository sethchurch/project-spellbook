'use client';

import { AccordionItem } from '@nextui-org/accordion';
import { Button } from '@nextui-org/button';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import { useFormContext } from 'react-hook-form';

import { PodChip } from '@/components/CharacterSheet/Pod';
import { Accordion } from '@/components/Elements/Accordion';
import { Input } from '@/components/Form/Input';

interface Resource {
  name: string;
  source: string;
  current: number;
  max: number;
}

type ResourceAction = 'increment' | 'decrement';
const fieldName = 'resources' as const;

const ResourcesTab = () => {
  const { getValues, setValue } = useFormContext();
  const resources: Resource[] = getValues(fieldName);

  const handleResourceButtonClick = (index: number, action: ResourceAction) => {
    const resource = resources[index] as Resource;
    const { current, max } = resource;
    const increment = action === 'increment' ? 1 : -1;
    const newValue = Math.min(Math.max(+current + increment, 0), max);
    setValue(`${fieldName}[${index}].current`, newValue.toString());
  };

  const getDangerColor = (current: number, target: number) => {
    return current === target ? 'danger' : 'default';
  };

  return (
    <Accordion styleVariant="podSplit">
      {resources.map(({ name, source, current, max }, index: number) => {
        const parentName = `${fieldName}[${index}]`;
        const decrement = () => handleResourceButtonClick(index, 'decrement');
        const increment = () => handleResourceButtonClick(index, 'increment');

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
              <Input label="Name" name={`${parentName}.name`} styleVariant="basic" />
              <Input label="Source" name={`${parentName}.source`} styleVariant="basic" />
              <Input label="Current" name={`${parentName}.current`} styleVariant="centered" type="number" />
              <Input label="Max" name={`${parentName}.max`} styleVariant="centered" type="number" />
              <Button className="h-full p-3" color={getDangerColor(+current, 0)} variant="flat" onClick={decrement}>
                <IconMinus size={24} />
              </Button>
              <Button className="h-full p-3" color={getDangerColor(+current, +max)} variant="flat" onClick={increment}>
                <IconPlus size={24} />
              </Button>
            </div>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export { ResourcesTab };
