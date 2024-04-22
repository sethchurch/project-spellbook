import { Button } from '@nextui-org/button';
import { Link, Outlet } from '@remix-run/react';
import { IconChevronLeft } from '@tabler/icons-react';

import { ToggleThemeButton } from '@/components/Elements/ToggleThemeButton';
import { MaxWidthWrapper } from '@/components/Layout/MaxWidthWrapper';

const AuthLayout = () => {
  return (
    <MaxWidthWrapper>
      <div className="relative grid h-screen w-full grid-cols-[1fr_10fr_1fr] items-center justify-center py-6 lg:grid-cols-[1fr_2fr_1fr] xl:grid-cols-3">
        <Link className="self-start" to="/">
          <Button isIconOnly>
            <IconChevronLeft />
          </Button>
        </Link>
        <div className="z-10 col-start-2">
          <Outlet />
        </div>
        <ToggleThemeButton className="self-start" variant="shadow" />
        <div className="absolute left-1/2 top-1/2 h-24 w-full -translate-x-1/2 translate-y-[-40%] rounded-full bg-stone-200 dark:bg-zinc-800 lg:h-32 lg:w-3/5" />
      </div>
    </MaxWidthWrapper>
  );
};

export default AuthLayout;
