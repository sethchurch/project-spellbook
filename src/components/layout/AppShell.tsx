'use client';

import { createContext, useContext, useMemo, useState } from 'react';

interface AppShellProps {
  children: React.ReactNode;
}

interface NavContextType {
  sideNavOpen: Boolean;
  setSideNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavContext = createContext<NavContextType | null>(null);

const useAppShell = () => {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error('useAppShell must be used within a AppShell');
  }

  const { setSideNavOpen } = context!;
  const toggleSideNav = () => {
    setSideNavOpen((prev: boolean) => !prev);
  };

  return { ...context, toggleSideNav };
};

const AppShell = ({ children }: AppShellProps) => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const value = useMemo<NavContextType>(() => ({ sideNavOpen, setSideNavOpen }), [sideNavOpen]);
  NavContext.displayName = 'AppShellContext';

  return (
    <NavContext.Provider value={value}>
      <div className="flex flex-col">{children}</div>
    </NavContext.Provider>
  );
};

export { AppShell, useAppShell };
