'use client';

import { useAppShell } from '@/components/Layout/AppShell';

interface SidenavProps {
  children?: React.ReactNode;
}

const Sidenav = ({ children }: SidenavProps) => {
  const { sideNavOpen } = useAppShell();
  return (
    <aside className={`${sideNavOpen ? 'ml-0' : '-ml-72'} -mt-16 w-72 transition-all`}>
      <div className="sticky top-0 z-40 h-screen w-72 bg-stone-200 p-3 pt-20 dark:bg-zinc-800">{children}</div>
    </aside>
  );
};

export { Sidenav };