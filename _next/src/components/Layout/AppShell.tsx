'use client';

import type { PropsWithChildren } from 'react';
import { createContext, useContext, useMemo, useState } from 'react';

interface NavContextType {
  sideNavOpen: Boolean;
  setSideNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavContext = createContext<NavContextType | null>(null);

const useAppShell = () => {
  const context = useContext(NavContext);

  if (!context) {
    throw new Error('useAppShell must be used within a AppShell');
  }

  const { setSideNavOpen } = context;
  const toggleSideNav = () => {
    setSideNavOpen((prev: boolean) => !prev);
  };

  return { ...context, toggleSideNav };
};

const AppShell = ({ children }: PropsWithChildren) => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const value = useMemo<NavContextType>(() => ({ sideNavOpen, setSideNavOpen }), [sideNavOpen]);
  NavContext.displayName = 'AppShellContext';

  return (
    <NavContext.Provider value={value}>
      <div className="flex h-full flex-col">{children}</div>
    </NavContext.Provider>
  );
};

export { AppShell, useAppShell };
