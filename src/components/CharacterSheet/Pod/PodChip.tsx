import { Chip } from '@nextui-org/chip';

interface PodChipProps {
  children: React.ReactNode;
  startContent?: React.ReactNode;
}

const PodChip = ({ children, startContent }: PodChipProps) => {
  return (
    <Chip className="w-full max-w-full" radius="md" startContent={startContent} variant="faded">
      {children}
    </Chip>
  );
};

export { PodChip };
export type { PodChipProps };
