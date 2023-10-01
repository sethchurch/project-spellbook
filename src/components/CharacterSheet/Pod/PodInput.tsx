import type { InputProps } from '@nextui-org/input';
import { Input } from '@nextui-org/input';
import { Controller, useFormContext } from 'react-hook-form';

interface PodInputProps extends InputProps {
  inputVariant?: 'default' | 'unstyled';
}

const classNameInputVariants = {
  default: {
    base: 'h-full',
    label: 'h-0 p-0',
    inputWrapper: 'border-none after:h-0 p-0 shadow-none h-full',
    input: `m-0 p-0 text-center h-full text-[2.5rem]`,
  },
  unstyled: {
    base: 'h-full',
  },
};

const PodInput = ({ name, inputVariant, ...props }: PodInputProps) => {
  const { control, watch } = useFormContext();

  return (
    <Controller
      control={control}
      name={name || 'name'}
      render={({ field }) => (
        <Input
          classNames={classNameInputVariants[inputVariant ?? 'default'] || {}}
          variant={inputVariant === 'unstyled' ? undefined : 'underlined'}
          {...props}
          {...field}
          value={watch(name || 'name')}
        />
      )}
    />
  );
};

export { PodInput };
