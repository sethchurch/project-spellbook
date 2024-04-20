'use client';

import { AccordionItem } from '@nextui-org/accordion';
import { Button } from '@nextui-org/button';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import { useFormContext } from 'react-hook-form';

import { PodChip } from '@/components/CharacterSheet/Pod';
import { Accordion } from '@/components/Elements/Accordion';
import { AddEditButtons } from '@/components/Elements/AddEditButtons';
import { FormInput } from '@/components/Form/FormInput';
import { DiscardModal } from '@/components/Modal/DiscardModal';
import { useEditableAccordion } from '@/hooks/useEditableAccordion';
import { useFormList } from '@/hooks/useFormList';

interface Resource {
  name: string;
  source: string;
  current: number;
  max: number;
}

const getColor = (current: number, target: number) => (current === target ? 'danger' : 'default');

type ResourceAction = 'increment' | 'decrement';
const fieldName = 'resources' as const;
const ResourcesTab = () => {
  const { setValue } = useFormContext();
  const { dataList: resources, add, remove } = useFormList<Resource>({ fieldName });
  const addBlank = () => add({ name: '', source: '', current: 0, max: 0 });
  const { toggleEditing, getAccordionItemProps, getDiscardModalProps } = useEditableAccordion({ remove });

  const handleResourceButtonClick = (index: number, action: ResourceAction) => {
    const resource = resources[index] as Resource;
    const { current, max } = resource;
    const increment = action === 'increment' ? 1 : -1;
    const newValue = Math.min(Math.max(+current + increment, 0), max);
    setValue(`${fieldName}[${index}].current`, newValue.toString());
  };

  return (
    <div className="flex-stack">
      <AddEditButtons itemName="Resource" onAdd={addBlank} onEdit={toggleEditing} />
      <Accordion styleVariant="podSplit">
        {resources.map(({ name, source, current, max }, index: number) => {
          const parentName = `${fieldName}[${index}]`;
          const decrement = () => handleResourceButtonClick(index, 'decrement');
          const increment = () => handleResourceButtonClick(index, 'increment');

          return (
            <AccordionItem
              {...getAccordionItemProps(index)}
              key={index}
              textValue={name}
              title={
                <div className="grid grid-cols-1 grid-rows-2 truncate md:grid-cols-[2fr_1fr] md:grid-rows-1">
                  <p className="truncate px-1">{name}</p>
                  <PodChip className="md:w-min md:justify-self-end">{source}</PodChip>
                </div>
              }
            >
              <div className="grid w-full grid-cols-1 gap-3 p-1 md:grid-cols-2">
                <FormInput label="Name" name={`${parentName}.name`} styleVariant="basic" />
                <FormInput label="Source" name={`${parentName}.source`} styleVariant="basic" />
                <FormInput label="Current" name={`${parentName}.current`} styleVariant="centered" type="number" />
                <FormInput label="Max" name={`${parentName}.max`} styleVariant="centered" type="number" />
                <Button className="h-full p-3" color={getColor(+current, 0)} variant="flat" onClick={decrement}>
                  <IconMinus size={24} />
                </Button>
                <Button className="h-full p-3" color={getColor(+current, +max)} variant="flat" onClick={increment}>
                  <IconPlus size={24} />
                </Button>
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
      <DiscardModal {...getDiscardModalProps()} title="Delete Resource" />
    </div>
  );
};

export { ResourcesTab };
