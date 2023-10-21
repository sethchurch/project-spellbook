'use client';

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
    title: <TabTitle styleVariant="alt">Core</TabTitle>,
    content: (
      <>
        <div className="h-32 w-full rounded-t-lg bg-gradient-to-r from-violet-700 to-violet-950 md:h-64" />
        <CoreTab />
      </>
    ),
  },
  {
    key: 'inventory',
    title: <TabTitle styleVariant="alt">Inventory</TabTitle>,
    content: (
      <>
        <div className="h-32 w-full rounded-t-lg bg-gradient-to-r from-violet-700 to-violet-950 md:h-64" />
        <CoreTab />
      </>
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
