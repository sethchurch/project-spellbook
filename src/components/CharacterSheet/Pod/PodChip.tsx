import { Chip } from '@nextui-org/chip';

interface PodChipProps {
  children: React.ReactNode;
  startContent?: React.ReactNode;
  left?: string;
}

const PodChip = ({ children, startContent, left }: PodChipProps) => {
  return (
    <Chip
      className="w-full max-w-full"
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
