import { Button } from '@nextui-org/button';
import { Link } from '@remix-run/react';
import { IconWand } from '@tabler/icons-react';

import { ToggleThemeButton } from '@/components/Elements/ToggleThemeButton';

// TODO add login auth
const LandingNav = ({ isLoggedIn }: { isLoggedIn?: boolean }) => {
  return (
    <div className="p-6">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-3">
          <IconWand />
          <p className="text-lg">Project Spellbook</p>
        </div>
        <div className="flex items-center gap-3">
          {!isLoggedIn ? (
            <Link to="/login">
              <Button className="px-6 font-bold shadow-2xl" radius="sm">
                Login
              </Button>
            </Link>
          ) : null}
          <Link className="underline underline-offset-4" to="/tavern">
            <Button className="px-6 font-bold shadow-2xl" color="primary" radius="sm">
              Enter the Tavern
            </Button>
          </Link>
          <ToggleThemeButton />
        </div>
      </div>
    </div>
  );
};

export { LandingNav };
