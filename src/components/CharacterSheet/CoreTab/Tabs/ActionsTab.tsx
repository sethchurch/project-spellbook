import { Textarea } from '@nextui-org/input';
import { AccordionItem } from '@nextui-org/react';
import { IconChevronLeft } from '@tabler/icons-react';

import { Accordion } from '@/components/Elements/Accordion';
import { character } from '@/config/dummyData';

import { Pod } from '../../Pod';

const { attacks } = character;

const ActionsTab = () => {
  return (
    <Accordion styleVariant="podSplit">
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
  );
};

export { ActionsTab };
