import { Button } from '@nextui-org/button';
import { Link } from '@remix-run/react';

import { CharacterFilterInput } from '@/components/Elements/CharacterFilterInput';
import { Icon } from '@/components/Elements/Icon';
import { ToggleThemeButton } from '@/components/Elements/ToggleThemeButton';

import { ProfileDropdown } from './ProfileDropdown';
import { SideNavTrigger } from './SideNavTrigger';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 col-span-2 m-0 flex h-16 w-full items-center justify-between gap-8 border border-none bg-stone-100 px-3 shadow-sm dark:bg-zinc-900 md:gap-32">
      <div className="flex items-center gap-3">
        <SideNavTrigger>
          <Button isIconOnly>
            <Icon icon="menu" />
          </Button>
        </SideNavTrigger>
        <Button isIconOnly>
          <Link className="p-3" to="/tavern">
            <Icon icon="home" />
          </Link>
        </Button>
      </div>
      <CharacterFilterInput />
      <div className="flex items-center gap-3">
        <ToggleThemeButton />
        <ProfileDropdown />
      </div>
    </nav>
  );
};

export { Navbar };
