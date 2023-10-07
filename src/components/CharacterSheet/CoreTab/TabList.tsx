import { Accordion, AccordionItem, Button, Tab, Tabs, Textarea } from '@nextui-org/react';
import { type Key, useState } from 'react';

import { character, loremIpsum } from '@/config/dummyData';

import { Pod, PodTextarea } from '../Pod';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

const { attacks } = character;

const TabTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-t-lg bg-default-200/50 p-3 px-8 group-data-[selected=true]:bg-zinc-200 dark:bg-zinc-950/60  dark:group-data-[selected=true]:bg-zinc-950">
      {children}
    </div>
  );
};

const TabList = () => {
  const [currentTab, setCurrentTab] = useState('actions' as Key);

  const setKeyOnSelectionChange = (key: Key) => {
    setCurrentTab(key);
  };

  return (
    <Tabs
      disableCursorAnimation
      aria-label="Options"
      classNames={{
        tabList: 'gap-3 w-full relative rounded-none p-0 border-b border-none bg-transparent',
        tab: 'max-w-fit p-0 h-full rounded-none data-[hover-unselected=true]:opacity-70 data-[hover-unselected=true]:rounded-t-lg',
        panel: 'h-full p-0 m-0 dark:bg-zinc-950 rounded-b-lg 2xl:rounded-r-lg overflow-hidden',
      }}
      selectedKey={currentTab}
      onSelectionChange={setKeyOnSelectionChange}
    >
      <Tab key="actions" title={<TabTitle>Actions</TabTitle>}>
        <Pod className="h-full">
          <Accordion
            isCompact
            className="flex-stack"
            itemClasses={{
              title: 'py-0',
              content: '-mt-2',
              base: 'group-[.is-splitted]:shadow-none',
              titleWrapper: 'py-1',
              indicator: 'block',
            }}
            variant="splitted"
          >
            {attacks.map((attack) => (
              <AccordionItem
                key={attack.name}
                indicator={
                  <Button className="h-full rounded p-3 m-auto" variant="faded">
                    <IconChevronLeft />
                  </Button>
                }
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
      </Tab>
      <Tab key="resources" title={<TabTitle>Resources</TabTitle>}>
        <Pod className="h-full">
          <Accordion
            isCompact
            className="flex-stack"
            itemClasses={{
              title: 'py-0',
              content: '-mt-2',
              base: 'group-[.is-splitted]:shadow-none',
              titleWrapper: 'py-1',
            }}
            variant="splitted"
          >
            {attacks.map((attack) => (
              <AccordionItem
                key={attack.name}
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
      </Tab>
      <Tab key="features" title={<TabTitle>Features</TabTitle>}>
        <Pod className="h-full">
          <Accordion
            isCompact
            className="flex-stack"
            itemClasses={{
              title: 'py-0',
              content: '-mt-2',
              base: 'group-[.is-splitted]:shadow-none',
              titleWrapper: 'py-1',
            }}
            variant="splitted"
          >
            {attacks.map((attack) => (
              <AccordionItem
                key={attack.name}
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
      </Tab>
      <Tab key="notes" title={<TabTitle>Notes</TabTitle>}>
        <Pod className="h-full">
          <PodTextarea maxRows={64} name="notes" placeholder={loremIpsum.repeat(10)} />
        </Pod>
      </Tab>
    </Tabs>
  );
};

export { TabList };
