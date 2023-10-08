import { Chip } from '@nextui-org/chip';

import { cn } from '@/utils/cn';

interface PodChipProps {
  className?: string;
  children: React.ReactNode;
  left?: string;
  startContent?: React.ReactNode;
}

const PodChip = ({ children, className, left, startContent }: PodChipProps) => {
  return (
    <Chip
      className={cn('relative w-full max-w-full', className)}
      classNames={{
        base: '!justify-between !p-1 !h-7',
        content: 'flex-1 px-3',
      }}
      radius="md"
      startContent={
        <>
          {left && (
            <Chip className="-ml-1 mr-1 min-w-unit-12 text-center" radius="md">
              {left}
            </Chip>
          )}
          {startContent}
        </>
      }
      variant="faded"
    >
      {children}
    </Chip>
  );
};

export { PodChip };
export type { PodChipProps };
