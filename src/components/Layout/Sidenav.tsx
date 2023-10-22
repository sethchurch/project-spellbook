'use client';

import type { PropsWithChildren } from 'react';

import { useAppShell } from '@/components/Layout/AppShell';
import { cn } from '@/utils/cn';

const Sidenav = ({ children }: PropsWithChildren) => {
  const { sideNavOpen } = useAppShell();
  const sideNavClass = sideNavOpen ? 'ml-0' : '-ml-72';

  return (
    <aside
      className={cn(
        sideNavClass,
        'fixed xl:sticky xl:top-0 z-40 -mt-16 h-screen w-72 flex-shrink-0 bg-stone-200 p-3 pt-20 transition-all dark:bg-zinc-800',
      )}
    >
      <div className="flex-stack">{children}</div>
    </aside>
  );
};

export { Sidenav };
