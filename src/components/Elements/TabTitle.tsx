import type { PropsWithChildren } from 'react';

import { cn } from '@/utils/cn';

const styleVariants = {
  default:
    'group-data-[selected=true]:bg-stone-200 dark:bg-zinc-950/60 bg-stone-200/50 dark:group-data-[selected=true]:bg-zinc-950',
  alt: 'group-data-[selected=true]:bg-stone-100 dark:bg-zinc-900/60 bg-stone-100/50 dark:group-data-[selected=true]:bg-zinc-900',
};

const sizeVariants = {
  default: 'p-3 px-1.5 sm:px-8',
  lg: 'p-2 sm:p-3.5 px-3.5 sm:px-12',
};

interface TabTitleProps extends PropsWithChildren {
  styleVariant?: keyof typeof styleVariants;
  size?: keyof typeof sizeVariants;
  label?: string;
}

const TabTitle = ({ children, styleVariant, size, label }: TabTitleProps) => {
  return (
    <div
      className={cn(
        'rounded-t-lg font-medium',
        sizeVariants[size ?? 'default'],
        styleVariants[styleVariant ?? 'default'],
      )}
    >
      {label || children}
    </div>
  );
};

export { TabTitle };
