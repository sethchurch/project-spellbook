import { useAppShell } from '@/components/Layout/AppShell';

interface SidenavProps {
  children?: React.ReactNode;
}

const Sidenav = ({ children }: SidenavProps) => {
  const { sideNavOpen } = useAppShell();
  return (
    <aside className={`${sideNavOpen ? 'ml-0' : '-ml-72'} w-72 transition-all`}>
      <div className="fixed top-16  h-screen w-72 bg-zinc-900 p-3">{children}</div>
    </aside>
  );
};

export { Sidenav };
