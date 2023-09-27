import { Button, Input } from '@nextui-org/react';
import { IconMenu2 } from '@tabler/icons-react';

import { useAppShell } from '@/components/Layout/AppShell';

const Navbar = () => {
  const { toggleSideNav } = useAppShell();

  return (
    <nav className="sticky top-0 z-50 col-span-2 m-0 grid h-16 w-full grid-cols-[1fr_3fr_1fr] items-center border border-stone-950 bg-zinc-900 px-3 shadow-sm">
      <Button isIconOnly onClick={toggleSideNav}>
        <IconMenu2 />
      </Button>
      <Input />
    </nav>
  );
};

export { Navbar };
