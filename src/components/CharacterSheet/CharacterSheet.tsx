'use client';

import { Chip } from '@nextui-org/chip';
import { Tab } from '@nextui-org/tabs';

import { TabList } from '@/components/Elements/TabList';
import { TabTitle } from '@/components/Elements/TabTitle';
import type { ComponentTab } from '@/types/tabs';

import { CoreTab } from './CoreTab';
import { InventoryTab } from './InventoryTab';

const ComingSoon = () => (
  <div className="flex h-screen justify-center p-3">
    <Chip size="lg">Coming soon to the tavern!</Chip>
  </div>
);

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
    content: <ComingSoon />,
  },
  {
    key: 'spells',
    title: (
      <TabTitle size="lg" styleVariant="alt">
        Spells
      </TabTitle>
    ),
    content: <ComingSoon />,
  },
];

const CharacterSheet = () => {
  return (
    <div className="m-1 md:m-6">
      <TabList defaultTab="actions">
        {Tabs.map((tab: ComponentTab) => (
          <Tab key={tab.key} title={tab.title}>
            <div className="bg-pod-alt rounded-lg">{tab.content}</div>
          </Tab>
        ))}
      </TabList>
    </div>
  );
};

export { CharacterSheet };
