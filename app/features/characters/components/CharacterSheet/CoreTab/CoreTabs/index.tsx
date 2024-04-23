'use client';

import { Tab } from '@nextui-org/tabs';

import { Pod } from '@/components/Elements/Pod';
import { TabList } from '@/components/Elements/TabList';
import { TabTitle } from '@/components/Elements/TabTitle';
import { Textarea } from '@/components/Form/Textarea';
import type { ComponentTab } from '@/types/tabs';

import { ActionsTab } from './ActionsTab';
import { FeaturesTab } from './FeaturesTab';
import { ResourcesTab } from './ResourcesTab';

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
    content: <Textarea maxRows={64} minRows={24} name="notes" radius="sm" styleVariant="grow" />,
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
