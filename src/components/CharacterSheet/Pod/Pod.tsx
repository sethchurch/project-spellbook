import { cn } from '@/utils/cn';

interface PodProps {
  children?: React.ReactNode;
  variant?: 'alt' | 'default' | 'transparent';
  className?: string;
  label?: string;
  labelTop?: boolean;
}

const variants = {
  bg: {
    alt: 'bg-pod-alt',
    default: 'bg-pod',
    transparent: 'transparent',
  },
};

const Pod = ({ children, variant, className, label, labelTop }: PodProps) => {
  const variantClass = variants.bg[variant ?? 'default'];
  return (
    <div className={cn(`rounded-lg flex flex-col justify-between ${variantClass}`, className)}>
      {label && labelTop && (
        <div className="w-full text-ellipsis whitespace-nowrap rounded-t-lg bg-zinc-600/40 p-1 text-center text-sm text-white dark:bg-zinc-600/50">
          {label}
        </div>
      )}
      <div className="h-full w-full p-4">{children}</div>
      {label && !labelTop && (
        <div className="w-full text-ellipsis whitespace-nowrap rounded-b-lg bg-zinc-600/40 p-1 text-center text-sm text-white dark:bg-zinc-600/50">
          {label}
        </div>
      )}
    </div>
  );
};

export { Pod };
export type { PodProps };