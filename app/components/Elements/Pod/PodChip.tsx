import { Chip } from '@nextui-org/chip';

import { cn } from '@/utils/cn';

interface PodChipProps {
  className?: string;
  children: React.ReactNode;
  startContent?: React.ReactNode;
}

const PodChip = ({ children, className, startContent }: PodChipProps) => {
  return (
    <Chip
      className={cn('relative w-full max-w-full', className)}
      classNames={{
        base: '!justify-between !p-1 !h-7',
        content: 'flex-1 px-3',
      }}
      radius="md"
      startContent={startContent}
      variant="faded"
    >
      {children}
    </Chip>
  );
};

export { PodChip };
export type { PodChipProps };
