'use client';

import { Skeleton } from '@nextui-org/react';
import React from 'react';

import { useMounted } from '@/hooks/useMounted';
import { cn } from '@/utils/cn';

interface PodProps {
  isCompact?: boolean;
  children?: React.ReactNode;
  variant?: 'alt' | 'default' | 'transparent';
  className?: string;
  label?: string;
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

const Pod = ({ isCompact, children, variant, className, label }: PodProps) => {
  const variantClass = variants[variant ?? 'default'];
  const isCompactClass = isCompact ? 'p-2 md:p-3 truncate' : 'p-3 md:p-4';
  const mounted = useMounted();

  return (
    <div className={cn('rounded-lg flex flex-col justify-between', variantClass, className)}>
      {label && <PodLabel className="rounded-t-lg" label={label} />}
      {children && (
        <div className={cn('h-full w-full', isCompactClass)}>
          {mounted ? children : <Skeleton className="h-full w-full p-8" />}
        </div>
      )}
    </div>
  );
};

export { Pod };
export type { PodProps };
