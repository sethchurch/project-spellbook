import { cn } from '@nextui-org/react';

interface CharacterSheetPodProps {
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

const CharacterSheetPod = ({ children, variant, className, label, labelTop }: CharacterSheetPodProps) => {
  const variantClass = variants.bg[variant ?? 'default'];
  return (
    <div className={cn(`rounded-lg flex flex-col justify-between ${variantClass}`, className)}>
      {label && labelTop && (
        <div className="w-full rounded-t-lg bg-zinc-600/40 p-1 text-center text-sm text-white dark:bg-zinc-600/50">
          {label}
        </div>
      )}
      <div className="h-full w-full p-4">{children}</div>
      {label && !labelTop && (
        <div className="w-full rounded-b-lg bg-zinc-600/40 p-1 text-center text-sm text-white dark:bg-zinc-600/50">
          {label}
        </div>
      )}
    </div>
  );
};

export { CharacterSheetPod };
export type { CharacterSheetPodProps };
