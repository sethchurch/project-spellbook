import { cn } from '@nextui-org/react';

interface CharacterSheetPodProps {
  children: React.ReactNode;
  variant?: 'alt' | 'default' | 'transparent';
  className?: string;
}

const variants = {
  bg: {
    alt: 'bg-pod-alt',
    default: 'bg-pod',
    transparent: 'transparent',
  },
};

const CharacterSheetPod = ({ children, variant, className }: CharacterSheetPodProps) => {
  return (
    <div className={cn(`rounded-lg p-3 text-center ${variants.bg[variant ?? 'default']}`, className)}>{children}</div>
  );
};

export { CharacterSheetPod };
