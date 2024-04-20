'use client';

import { Tab } from '@nextui-org/tabs';

import { CharacterImageEditButton } from '@/components/Elements/CharacterImageEditButton';
import { TabList } from '@/components/Elements/TabList';
import { TabTitle } from '@/components/Elements/TabTitle';
import type { ComponentTab } from '@/types/tabs';

import { BioTab } from './BioTab';
import { CoreTab } from './CoreTab';
import { InventoryTab } from './InventoryTab';
import { SpellsTab } from './SpellsTab';

const Tabs: ComponentTab[] = [
  {
    key: 'core',
    title: (
      <TabTitle size="lg" styleVariant="alt">
        Core
      </TabTitle>
    ),
    content: <CoreTab />,
  },
  {
    key: 'inventory',
    title: (
      <TabTitle size="lg" styleVariant="alt">
        Inventory
      </TabTitle>
    ),
    content: <InventoryTab />,
  },
  {
    key: 'bio',
    title: (
      <TabTitle size="lg" styleVariant="alt">
        Bio
      </TabTitle>
    ),
    content: <BioTab />,
  },
  {
    key: 'spells',
    title: (
      <TabTitle size="lg" styleVariant="alt">
        Spells
      </TabTitle>
    ),
    content: <SpellsTab />,
  },
];

const CharacterSheet = () => {
  return (
    <div className="m-1 md:m-6">
      <TabList defaultTab="actions">
        {Tabs.map((tab: ComponentTab) => (
          <Tab key={tab.key} title={tab.title}>
            <div className="bg-pod-alt rounded-lg">
              <div className="group relative flex h-32 w-full flex-col rounded-t-lg bg-gradient-to-r from-violet-700 to-violet-950 md:h-56">
                {/* <Image
                  fill
                  alt="image of character"
                  className="block"
                  sizes="100vw"
                  src="https://picsum.photos/2048/256"
                /> */}
                <div className=" absolute left-0 top-0 h-full w-full bg-gradient-to-r from-violet-700 to-violet-950 opacity-0 transition-opacity hover:opacity-30" />
                <CharacterImageEditButton />
              </div>
              {tab.content}
            </div>
          </Tab>
        ))}
      </TabList>
    </div>
  );
};

export { CharacterSheet };
