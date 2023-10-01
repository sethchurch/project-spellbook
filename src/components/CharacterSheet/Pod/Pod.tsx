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

const PodLabel = ({ label, className }: { label: string; className?: string }) => (
  <div
    className={cn(
      'w-full text-ellipsis whitespace-nowrap bg-zinc-600/40 p-1 text-center text-sm text-white dark:bg-zinc-600/50',
      className,
    )}
  >
    {label}
  </div>
);

const Pod = ({ children, variant, className, label, labelTop }: PodProps) => {
  const variantClass = variants.bg[variant ?? 'default'];
  return (
    <div className={cn(`rounded-lg flex flex-col justify-between ${variantClass}`, className)}>
      {label && labelTop && <PodLabel className="rounded-t-lg" label={label} />}
      <div className="h-full w-full p-4">{children}</div>
      {label && !labelTop && <PodLabel className="rounded-b-lg" label={label} />}
    </div>
  );
};

export { Pod };
export type { PodProps };
