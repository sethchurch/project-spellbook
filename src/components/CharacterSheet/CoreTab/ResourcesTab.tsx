import { Accordion, AccordionItem, Button } from '@nextui-org/react';
import { IconChevronLeft, IconMinus, IconPlus } from '@tabler/icons-react';
import { useFormContext } from 'react-hook-form';

import { Pod, PodChip, PodInput } from '../Pod';

interface Resource {
  name: string;
  source: string;
  current: number;
  max: number;
}

const ResourcesTab = () => {
  const fieldName = 'resources' as const;
  const { getValues } = useFormContext();
  const resources = getValues(fieldName);

  return (
    <Pod>
      <Accordion
        isCompact
        className="flex-stack px-0"
        itemClasses={{
          title: 'py-0',
          base: 'group-[.is-splitted]:shadow-none',
          titleWrapper: 'p-0',
          content: 'py-3',
        }}
        selectionMode="multiple"
        variant="splitted"
      >
        {resources.map((resource: Resource, index: number) => (
          <AccordionItem
            key={index}
            indicator={<IconChevronLeft />}
            textValue={resource.name}
            title={
              <div className="flex gap-6">
                <div className="flex w-full flex-[10] flex-col justify-center gap-x-6 gap-y-3 text-[1rem]">
                  <p className="col-span-2">{resource.name}</p>
                  <div className="flex gap-3 text-right">
                    <PodChip left="Current">{resource.current}</PodChip>
                    <PodChip left="Max">{resource.max}</PodChip>
                  </div>
                </div>
                <div className="flex flex-[1] gap-3">
                  <Button className="h-full py-1" variant="flat">
                    <IconMinus size={16} />
                  </Button>
                  <Button className="h-full py-1" variant="flat">
                    <IconPlus size={16} />
                  </Button>
                </div>
              </div>
            }
          >
            <div className="grid w-full grid-cols-2 gap-3">
              <PodInput label="Name" name={`${fieldName}[${index}.name]`} styleVariant="unstyled" />
              <PodInput label="Source" name={`${fieldName}[${index}.source]`} styleVariant="unstyled" />
              <PodInput
                className="col-span-2"
                label="Current"
                name={`${fieldName}[${index}.current]`}
                styleVariant="unstyled"
                type="number"
              />
              <PodInput
                className="col-span-2"
                label="Max"
                name={`${fieldName}[${index}.max]`}
                styleVariant="unstyled"
                type="number"
              />
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </Pod>
  );
};

export { ResourcesTab };
