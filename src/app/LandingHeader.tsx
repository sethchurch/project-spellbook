import type { PropsWithChildren } from 'react';

import { cn } from '@/utils/cn';

interface LandingHeaderProps extends PropsWithChildren {
  className?: string;
}
const LandingHeader = ({ children, className }: LandingHeaderProps) => {
  return (
    <h2 className={cn('bg-zinc-900 px-6 lg:px-12 py-3 text-3xl font-semibold whitespace-normal rounded-lg', className)}>
      {children}
    </h2>
  );
};

export { LandingHeader };
