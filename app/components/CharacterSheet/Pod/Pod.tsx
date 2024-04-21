'use client';

import { Skeleton } from '@nextui-org/react';
import type React from 'react';

import { useMounted } from '@/hooks/useMounted';
import { cn } from '@/utils/cn';

interface PodProps {
  isCompact?: boolean;
  children?: React.ReactNode;
  variant?: 'alt' | 'default' | 'transparent';
  className?: string;
  classNames?: { [key in 'base' | 'content']?: string };
  label?: string;
  disableLoading?: boolean;
}

const variants = {
  alt: 'bg-pod-alt',
  default: 'bg-pod',
  transparent: 'transparent',
};

const PodLabel = ({ label, className }: { label: string; className?: string }) => (
  <div
    className={cn(
      'w-full text-ellipsis whitespace-nowrap bg-zinc-600/40 p-1 text-center text-sm text-white dark:bg-zinc-600/50 px-2',
      className,
    )}
  >
    {label}
  </div>
);

const Pod = ({ isCompact, children, variant, className, classNames, label, disableLoading }: PodProps) => {
  const variantClass = variants[variant ?? 'default'];
  const isCompactClass = isCompact ? 'p-2 truncate' : 'p-3';
  const mounted = useMounted();

  return (
    <div
      className={cn('rounded-lg flex flex-col justify-between shadow-sm', variantClass, className, classNames?.base)}
    >
      {label ? <PodLabel className="rounded-t-lg" label={label} /> : null}
      {children ? (
        <div className={cn('h-full w-full', isCompactClass, classNames?.content)}>
          {mounted || disableLoading ? children : <Skeleton className="size-full p-12" />}
        </div>
      ) : null}
    </div>
  );
};

export { Pod };
export type { PodProps };
