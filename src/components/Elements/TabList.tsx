import { Tabs } from '@nextui-org/react';
import { type Key, useState } from 'react';

const TabTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-t-lg bg-default-200/50 p-3 px-8 group-data-[selected=true]:bg-zinc-200 dark:bg-zinc-950/60  dark:group-data-[selected=true]:bg-zinc-950">
      {children}
    </div>
  );
};

interface TabListProps {
  className?: string;
  defaultTab: Key;
  children: React.ReactNode;
}

const TabList = ({ children, className, defaultTab }: TabListProps) => {
  const [currentTab, setCurrentTab] = useState(defaultTab);

  const setKeyOnSelectionChange = (key: Key) => {
    setCurrentTab(key);
  };

  return (
    <Tabs
      disableCursorAnimation
      aria-label="Options"
      className={className}
      classNames={{
        tabList: 'gap-3 w-full relative rounded-none p-0 border-b border-none bg-transparent',
        tab: 'max-w-fit p-0 h-full rounded-none data-[hover-unselected=true]:opacity-70 data-[hover-unselected=true]:rounded-t-lg',
        panel:
          'h-full p-0 m-0 dark:bg-zinc-950 rounded-b-lg 2xl:rounded-r-lg overflow-hidden [&>*]:rounded-tl-none [&>*]:py-0',
      }}
      selectedKey={currentTab}
      onSelectionChange={setKeyOnSelectionChange}
    >
      {children}
    </Tabs>
  );
};

export { TabList, TabTitle };
