import { useAppShell } from '@/components/Layout/AppShell';

interface SidenavProps {
  children?: React.ReactNode;
}

const Sidenav = ({ children }: SidenavProps) => {
  const { sideNavOpen } = useAppShell();
  return (
    <aside className={`${sideNavOpen ? 'ml-0' : '-ml-72'} w-72 transition-all`}>
      <div className="fixed top-16  h-screen w-72 bg-default-300 p-3 dark:bg-zinc-800">{children}</div>
    </aside>
  );
};

export { Sidenav };
