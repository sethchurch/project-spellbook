import { Textarea } from '@nextui-org/input';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { IconChevronLeft } from '@tabler/icons-react';

import { character } from '@/config/dummyData';

import { Pod } from '../Pod';

const { attacks } = character;

const ActionsTab = () => {
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
        variant="splitted"
      >
        {attacks.map((attack) => (
          <AccordionItem
            key={attack.name}
            indicator={<IconChevronLeft />}
            textValue={attack.name}
            title={
              <div>
                <div className="grid w-full grid-cols-[5fr_2fr_5fr] gap-3">
                  <Pod isCompact>{attack.name}</Pod>
                  <Pod isCompact className="text-center">
                    +{attack.bonus}
                  </Pod>
                  <Pod isCompact>
                    {attack.damage} {attack.damageType}
                  </Pod>
                </div>
              </div>
            }
          >
            <Textarea value={attack.description} />
          </AccordionItem>
        ))}
      </Accordion>
    </Pod>
  );
};

export { ActionsTab };
