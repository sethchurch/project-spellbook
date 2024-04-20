'use client';

import type { PropsWithChildren } from 'react';
import { Children, cloneElement } from 'react';

import { useAppShell } from './AppShell';

const SideNavTrigger = ({ children }: PropsWithChildren) => {
  const { toggleSideNav } = useAppShell();
  return Children.map(children as React.ReactElement[], (child: React.ReactElement) => {
    return cloneElement(child, { onClick: toggleSideNav });
  });
};

export { SideNavTrigger };
