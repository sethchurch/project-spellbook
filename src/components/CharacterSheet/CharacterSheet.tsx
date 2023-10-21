'use client';

import { Chip } from '@nextui-org/chip';
import { Tab } from '@nextui-org/tabs';

import { TabList } from '@/components/Elements/TabList';

import { TabTitle } from '../Elements/TabTitle';
import { CoreTab } from './CoreTab';

type ComponentTab = {
  key: string;
  title: JSX.Element;
  content: JSX.Element;
};

const Tabs: ComponentTab[] = [
  {
    key: 'core',
    title: (
      <TabTitle size="lg" styleVariant="alt">
        Core
      </TabTitle>
    ),
    content: (
      <>
        <div className="h-32 w-full rounded-t-lg bg-gradient-to-r from-violet-700 to-violet-950 md:h-64" />
        <CoreTab />
      </>
    ),
  },
  {
    key: 'inventory',
    title: (
      <TabTitle size="lg" styleVariant="alt">
        Inventory
      </TabTitle>
    ),
    content: (
      <div className="flex h-screen justify-center p-3">
        <Chip size="lg">Coming soon to a Tavern near you!</Chip>
      </div>
    ),
  },
  {
    key: 'Bio',
    title: (
      <TabTitle size="lg" styleVariant="alt">
        Bio
      </TabTitle>
    ),
    content: (
      <div className="flex h-screen justify-center p-3">
        <Chip size="lg">Coming soon to a Tavern near you!</Chip>
      </div>
    ),
  },
  {
    key: 'spells',
    title: (
      <TabTitle size="lg" styleVariant="alt">
        Spells
      </TabTitle>
    ),
    content: (
      <div className="flex h-screen justify-center p-3">
        <Chip size="lg">Coming soon to a Tavern near you!</Chip>
      </div>
    ),
  },
];

const CharacterSheet = () => {
  return (
    <div className="m-2 md:m-6">
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
