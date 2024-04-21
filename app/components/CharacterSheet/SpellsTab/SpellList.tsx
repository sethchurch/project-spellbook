import { AccordionItem } from '@nextui-org/accordion';
import { SelectItem } from '@nextui-org/select';

import { Pod } from '@/components/CharacterSheet/Pod';
import { Accordion } from '@/components/Elements/Accordion';
import { AddEditButtons } from '@/components/Elements/AddEditButtons';
import { FormCheck } from '@/components/Form/FormCheck';
import { FormInput } from '@/components/Form/FormInput';
import { FormSelect } from '@/components/Form/FormSelect';
import { Textarea } from '@/components/Form/Textarea';
import { DiscardModal } from '@/components/Modal/DiscardModal';
import type { Spell } from '@/config/CharacterConfig';
import { useEditableAccordion } from '@/hooks/useEditableAccordion';
import { useFormList } from '@/hooks/useFormList';

import { defaultSpellOptions, spellSchoolOptions } from './spellTabConfig';

interface SpellListProps {
  level: number;
  actionsOnly?: boolean;
}

const fieldName = 'spells' as const;
const SpellList = ({ level, actionsOnly }: SpellListProps) => {
  const { dataList: spells, add, remove } = useFormList<Spell>({ fieldName: `${fieldName}[${level}]` });
  const addBlank = () => add({ ...defaultSpellOptions, level });
  const { toggleEditing, getAccordionItemProps, getDiscardModalProps } = useEditableAccordion({ remove });

  const spellsActionOnly = spells?.filter(({ showInActionList }) => (actionsOnly ? showInActionList : true));
  if (actionsOnly && spellsActionOnly.length === 0) return null;

  return (
    <>
      <Accordion styleVariant="podSplit">
        {spellsActionOnly?.map(({ name, damage, damageType, range, components }, index) => {
          const parentName = `${fieldName}[${level}][${index}]`;
          const componentParentName = `${parentName}.components`;

          return (
            <AccordionItem
              {...getAccordionItemProps(index)}
              key={index}
              classNames={{ base: 'p-0 group-[.is-splitted]:px-2 group-[.is-splitted]:shadow-none' }}
              textValue={name ?? 'Blank Spell'}
              title={
                <div className="grid w-full grid-cols-[7fr_3fr_5fr] gap-2">
                  <Pod isCompact className="truncate">
                    {name || 'Blank Spell'}
                  </Pod>
                  <Pod isCompact className="truncate text-center">
                    {range}
                  </Pod>
                  <Pod isCompact className="truncate">
                    {damage} {damageType}
                  </Pod>
                </div>
              }
            >
              <div className="flex-stack p-1">
                <FormInput label="Name" name={`${parentName}.name`} styleVariant="basic" />
                <FormSelect label="School" name={`${parentName}.school`}>
                  {spellSchoolOptions.map(({ key, displayName }) => (
                    <SelectItem key={key} value={key}>
                      {displayName}
                    </SelectItem>
                  ))}
                </FormSelect>
                <div className="flex gap-3">
                  <FormCheck name={`${parentName}.ritual`}>Ritual</FormCheck>
                  <FormCheck name={`${parentName}.showInActionList`}>Show in Action List</FormCheck>
                </div>
                <FormInput label="Range" name={`${parentName}.range`} styleVariant="basic" />
                <FormInput label="Duration" name={`${parentName}.duration`} styleVariant="basic" />
                <FormInput label="Casting Time" name={`${parentName}.castingTime`} styleVariant="basic" />
                <div className="flex gap-3">
                  <FormInput label="Damage" name={`${parentName}.damage`} styleVariant="basic" />
                  <FormInput label="Damage Type" name={`${parentName}.damageType`} styleVariant="basic" />
                </div>
                <div className="flex gap-3">
                  <FormCheck name={`${componentParentName}.verbal`}>Verbal</FormCheck>
                  <FormCheck name={`${componentParentName}.somatic`}>Somatic</FormCheck>
                  <FormCheck name={`${componentParentName}.material`}>Material</FormCheck>
                </div>
                {components.material ? (
                  <FormInput
                    label="Material Description"
                    name={`${componentParentName}.materialDescription`}
                    styleVariant="basic"
                  />
                ) : null}
                <Textarea label="Description" name={`${parentName}.description`} styleVariant="basic" />
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
      {!actionsOnly ? (
        <>
          <DiscardModal {...getDiscardModalProps()} title="Delete Spell" />
          <div className="flex-stack pt-3">
            <AddEditButtons iconOnly onAdd={addBlank} onEdit={toggleEditing} />
          </div>
        </>
      ) : null}
    </>
  );
};

export { SpellList };
