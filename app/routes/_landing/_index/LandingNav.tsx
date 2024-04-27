import { Button } from '@nextui-org/button';
import { Link } from '@remix-run/react';
import { IconWand } from '@tabler/icons-react';

import { ToggleThemeButton } from '@/components/Elements/ToggleThemeButton';
import { useOptionalSession } from '@/features/auth';
import type { PropsWithClassName } from '@/types/propTypes';

// TODO add login auth
const LandingNav = ({ className }: PropsWithClassName) => {
  const session = useOptionalSession();

  return (
    <div className={className}>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-3">
          <IconWand />
          <p className="text-lg">Project Spellbook</p>
        </div>
        <div className="flex items-center gap-3">
          {!session ? (
            <Link to="/login">
              <Button className="px-6 font-bold shadow-2xl" radius="sm">
                Login
              </Button>
            </Link>
          ) : null}
          <Link className="hidden underline underline-offset-4 md:block" to="/tavern">
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
