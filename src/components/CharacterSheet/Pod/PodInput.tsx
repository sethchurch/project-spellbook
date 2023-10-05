import type { InputProps } from '@nextui-org/input';
import { Input } from '@nextui-org/input';
import { Controller, useFormContext } from 'react-hook-form';

interface PodInputProps extends InputProps {
  inputVariant?: 'default' | 'unstyled' | 'jumbo';
}

const classNameInputVariants = {
  default: {
    base: 'h-full',
    label: 'h-0 p-0',
    inputWrapper: 'border-none after:h-0 p-0 shadow-none h-full bg-transparent gap-0',
    input: `m-0 p-0 text-center h-full text-[2.5rem]`,
  },
  unstyled: {
    base: 'h-full',
  },
  jumbo: {
    base: 'h-full',
    label: 'text-center w-full m-auto pb-3 lg:pb-5',
    inputWrapper: 'border-none after:h-0 p-0 shadow-none h-full bg-transparent gap-0',
    input: `m-0 p-0 text-center h-full text-[2rem] lg:text-[2.5rem]`,
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
          classNames={classNameInputVariants[inputVariant ?? 'default']}
          {...props}
          {...field}
          value={watch(name || 'name')}
        />
      )}
    />
  );
};

export { PodInput };
export type { PodInputProps };
