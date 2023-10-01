import { Button, Input } from '@nextui-org/react';

import { ToggleThemeButton } from '@/components/Elements/ToggleThemeButton';

import { Icon } from '../Elements/Icon';
import { SideNavTrigger } from './SideNavTrigger';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 col-span-2 m-0 grid h-16 w-full grid-cols-[1fr_3fr_1fr] items-center border border-none bg-default-200 px-3 shadow-sm dark:bg-zinc-900">
      <SideNavTrigger>
        <Button isIconOnly>
          <Icon icon="menu" />
        </Button>
      </SideNavTrigger>
      <Input />
      <ToggleThemeButton />
    </nav>
  );
};

export { Navbar };
