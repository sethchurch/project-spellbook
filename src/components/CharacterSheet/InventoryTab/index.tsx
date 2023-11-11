import { AccordionItem } from '@nextui-org/accordion';

import { Pod } from '@/components/CharacterSheet/Pod';
import { Accordion } from '@/components/Elements/Accordion';
import { AddEditButtons } from '@/components/Elements/AddEditButtons';
import { FormInput } from '@/components/Form/FormInput';
import { Textarea } from '@/components/Form/Textarea';
import { DiscardModal } from '@/components/Modal/DiscardModal';
import type { InventoryItem } from '@/config/CharacterConfig';
import { useEditableAccordion } from '@/hooks/useEditableAccordion';
import { useFormList } from '@/hooks/useFormList';

const fieldName = 'inventory' as const;
const InventoryTab = () => {
  const { dataList: inventoryItems, add, remove } = useFormList<InventoryItem>({ fieldName });
  const addBlank = () => add({ description: '', name: '', qty: 1, weight: 0 });
  const { toggleEditing, getAccordionItemProps, getDiscardModalProps } = useEditableAccordion({ remove });

  return (
    <div className="flex min-h-screen flex-col justify-start gap-3 p-3">
      <AddEditButtons onAdd={addBlank} onEdit={toggleEditing} />
      <Pod className="grow">
        <Accordion styleVariant="podSplit">
          {inventoryItems?.map(({ name, qty, weight }, index) => {
            const parentName = `${fieldName}[${index}]`;
            return (
              <AccordionItem
                {...getAccordionItemProps(index)}
                key={index}
                classNames={{ base: 'p-0 group-[.is-splitted]:px-2 group-[.is-splitted]:shadow-none' }}
                textValue={name}
                title={
                  <div className="grid w-full grid-cols-[2fr_1fr_1fr] gap-2 lg:grid-cols-[8fr_1fr_1fr]">
                    <Pod isCompact className="truncate">
                      {name}
                    </Pod>
                    <Pod isCompact className="truncate text-right">
                      {qty?.toString() ?? 1}
                    </Pod>
                    <Pod isCompact className="truncate text-right">
                      {`${weight ?? 0} lbs`}
                    </Pod>
                  </div>
                }
              >
                <div className="flex-stack px-0.5">
                  <div className="grid w-full grid-cols-[5fr_2fr_2fr] gap-2">
                    <FormInput label="Name" name={`${parentName}.name`} styleVariant="basic" />
                    <FormInput label="Quantity" name={`${parentName}.qty`} styleVariant="basic" />
                    <FormInput label="Weight" name={`${parentName}.weight`} styleVariant="basic" />
                  </div>
                  <Textarea label="Description" name={`${parentName}.description`} styleVariant="basic" />
                </div>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Pod>
      <DiscardModal {...getDiscardModalProps()} title="Delete Item" />
    </div>
  );
};

export { InventoryTab };
