'use client';

import { Tab } from '@nextui-org/tabs';

import { Pod } from '@/components/CharacterSheet/Pod';
import { TabList, TabTitle } from '@/components/Elements/TabList';
import { Textarea } from '@/components/Form/Textarea';

import { ActionsTab } from './ActionsTab';
import { FeaturesTab } from './FeaturesTab';
import { ResourcesTab } from './ResourcesTab';

type ComponentTab = {
  key: string;
  title: JSX.Element;
  content: JSX.Element;
};

const Tabs: ComponentTab[] = [
  {
    key: 'actions',
    title: <TabTitle>Actions</TabTitle>,
    content: <ActionsTab />,
  },
  {
    key: 'resources',
    title: <TabTitle>Resources</TabTitle>,
    content: <ResourcesTab />,
  },
  {
    key: 'features',
    title: <TabTitle>Features</TabTitle>,
    content: <FeaturesTab />,
  },
  {
    key: 'notes',
    title: <TabTitle>Notes</TabTitle>,
    content: <Textarea maxRows={64} minRows={24} name="notes" radius="sm" />,
  },
];

const CoreTabs = () => {
  return (
    <TabList defaultTab="actions">
      {Tabs.map((tab: ComponentTab) => (
        <Tab key={tab.key} title={tab.title}>
          <Pod className="h-full">{tab.content}</Pod>
        </Tab>
      ))}
    </TabList>
  );
};

export { CoreTabs };
