'use client';

import { Tab } from '@nextui-org/tabs';

import { TabList, TabTitle } from '@/components/Elements/TabList';

import { Pod, PodTextarea } from '../../Pod';
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
    content: <PodTextarea className="h-full" maxRows={64} minRows={24} name="notes" styleVariant="inset" />,
  },
];

const CoreTabs = () => {
  return (
    <TabList defaultTab="actions">
      {Tabs.map((tab: ComponentTab) => (
        <Tab key={tab.key} title={tab.title}>
          <Pod>{tab.content}</Pod>
        </Tab>
      ))}
    </TabList>
  );
};

export { CoreTabs };
