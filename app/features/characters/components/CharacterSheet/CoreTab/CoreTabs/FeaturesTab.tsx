'use client';

import { AccordionItem } from '@nextui-org/accordion';

import { Accordion } from '@/components/Elements/Accordion';
import { FormInput } from '@/components/Form/FormInput';
import { Textarea } from '@/components/Form/Textarea';
import { DiscardModal } from '@/components/Modal/DiscardModal';
import { AddEditButtons } from '@/features/characters/components/AddEditButtons';
import { useEditableAccordion } from '@/hooks/useEditableAccordion';
import { useFormList } from '@/hooks/useFormList';

import { PodChip } from '../../Pod';

interface Feature {
  name: string;
  description: string;
  source: string;
}

const fieldName = 'features' as const;

const FeaturesTab = () => {
  const { dataList: features, add, remove } = useFormList<Feature>({ fieldName });
  const addBlank = () => add({ name: '', source: '', description: '' });
  const { toggleEditing, getAccordionItemProps, getDiscardModalProps } = useEditableAccordion({ remove });

  return (
    <div className="flex-stack">
      <AddEditButtons itemName="Feature" onAdd={addBlank} onEdit={toggleEditing} />
      <Accordion styleVariant="podSplit">
        {features.map(({ name, source }, index: number) => {
          const parentName = `${fieldName}[${index}]`;
          return (
            <AccordionItem
              key={index}
              textValue={name}
              {...getAccordionItemProps(index)}
              title={
                <div className="grid grid-cols-1 grid-rows-2 truncate md:grid-cols-[2fr_1fr] md:grid-rows-1">
                  <p className="truncate px-1">{name}</p>
                  <PodChip className="md:w-min md:justify-self-end">{source}</PodChip>
                </div>
              }
            >
              <div className="grid w-full grid-cols-1 gap-3 p-1 md:grid-cols-2">
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
      <DiscardModal {...getDiscardModalProps()} title="Delete Feature" />
    </div>
  );
};

export { FeaturesTab };
