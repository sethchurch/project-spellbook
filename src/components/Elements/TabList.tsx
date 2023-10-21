'use client';

import { Tabs } from '@nextui-org/tabs';
import type { Key } from 'react';
import { useState } from 'react';

const styleVariants = {
  default: {
    tabList: 'gap-1 sm:gap-3 w-full relative rounded-none p-0 border-b border-none bg-transparent',
    tab: 'max-w-fit px-0 p-0 h-full rounded-none data-[hover-unselected=true]:opacity-70 data-[hover-unselected=true]:rounded-t-lg',
    panel:
      'h-full p-0 m-0 dark:bg-zinc-950 rounded-b-lg 2xl:rounded-r-lg overflow-hidden [&>*]:rounded-tl-none [&>*]:py-0 drop-shadow-sm',
  },
};

interface TabListProps {
  className?: string;
  defaultTab: Key;
  children: React.ReactNode;
  styleVariant?: keyof typeof styleVariants;
}

const TabList = ({ children, className, defaultTab, styleVariant }: TabListProps) => {
  const [currentTab, setCurrentTab] = useState(defaultTab);

  const setKeyOnSelectionChange = (key: Key) => {
    setCurrentTab(key);
  };

  return (
    <Tabs
      disableCursorAnimation
      aria-label="Options"
      className={className}
      classNames={styleVariants[styleVariant ?? 'default']}
      selectedKey={currentTab}
      onSelectionChange={setKeyOnSelectionChange}
    >
      {children}
    </Tabs>
  );
};

export { TabList };
