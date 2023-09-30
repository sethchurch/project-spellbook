import { Children, cloneElement } from 'react';

import { useAppShell } from './AppShell';

interface SideNavTriggerProps {
  children: React.ReactNode;
}

const SideNavTrigger = ({ children }: SideNavTriggerProps) => {
  const { toggleSideNav } = useAppShell();
  return Children.map(children as React.ReactElement[], (child: React.ReactElement) => {
    return cloneElement(child, { onClick: toggleSideNav });
  });
};

export { SideNavTrigger };
