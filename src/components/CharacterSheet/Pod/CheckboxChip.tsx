import { Chip } from '@nextui-org/chip';
import { Checkbox } from '@nextui-org/react';

interface CheckboxChipProps {
  value?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

const CheckboxChip = ({ children, onChange, value }: CheckboxChipProps) => {
  return (
    <Chip
      className="w-full max-w-full text-center"
      radius="md"
      startContent={<Checkbox checked={value} className="-ml-1 -mr-3" radius="sm" size="sm" onChange={onChange} />}
      variant="faded"
    >
      {children}
    </Chip>
  );
};

export { CheckboxChip };
