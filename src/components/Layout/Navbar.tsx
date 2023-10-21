import { Button } from '@nextui-org/button';
import Link from 'next/link';

import { Input } from '@/components/Elements/Input';
import { ToggleThemeButton } from '@/components/Elements/ToggleThemeButton';

import { Icon } from '../Elements/Icon';
import { SideNavTrigger } from './SideNavTrigger';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 col-span-2 m-0 grid h-16 w-full grid-cols-[1fr_3fr_1fr] items-center border border-none bg-stone-100 px-3 shadow-sm dark:bg-zinc-900">
      <div className="flex gap-3">
        <SideNavTrigger>
          <Button isIconOnly>
            <Icon icon="menu" />
          </Button>
        </SideNavTrigger>
        <Link href="/tavern">
          <Button isIconOnly>
            <Icon icon="home" />
          </Button>
        </Link>
      </div>
      <Input isClearable isDisabled styleVariant="inset" variant="faded" />
      <ToggleThemeButton />
    </nav>
  );
};

export { Navbar };
