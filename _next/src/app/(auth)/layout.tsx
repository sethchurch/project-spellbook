import { Button } from '@nextui-org/button';
import { IconChevronLeft } from '@tabler/icons-react';
import { Link } from '@remix-run/react';
import type { PropsWithChildren } from 'react';

import { ToggleThemeButton } from '@/components/Elements/ToggleThemeButton';
import { MaxWidthWrapper } from '@/components/Layout/MaxWidthWrapper';

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <MaxWidthWrapper>
      <div className="relative grid h-screen w-full grid-cols-[1fr_10fr_1fr] items-center justify-center py-6 lg:grid-cols-[1fr_2fr_1fr] xl:grid-cols-3">
        <Link className="self-start" to="/">
          <Button isIconOnly>
            <IconChevronLeft />
          </Button>
        </Link>
        <div className="z-10 col-start-2">{children}</div>
        <ToggleThemeButton className="self-start" variant="shadow" />
        <div className="absolute left-[50%] top-[50%] h-24 w-full translate-x-[-50%] translate-y-[-40%] rounded-full bg-stone-200 dark:bg-zinc-800 lg:h-32 lg:w-3/5" />
      </div>
    </MaxWidthWrapper>
  );
};

export default AuthLayout;
