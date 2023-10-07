import type { InputProps } from '@nextui-org/input';
import { Input } from '@nextui-org/input';
import { Controller, useFormContext } from 'react-hook-form';

const styleVariants = {
  default: {
    base: 'h-full',
    label: 'text-center w-full m-auto',
    inputWrapper: 'border-none after:h-0 p-0 shadow-none h-full bg-transparent gap-0',
    input: `m-0 p-0 text-center h-full text-[2.5rem]`,
  },
  unstyled: {
    base: 'h-full',
  },
  centered: {
    input: 'text-center text-[1.5rem] m-0 p-0',
  },
  jumbo: {
    base: 'h-full',
    label: 'text-center w-full m-auto pb-3 lg:pb-5',
    inputWrapper: 'border-none after:h-0 p-0 shadow-none h-full bg-transparent gap-0',
    input: `m-0 p-0 text-center h-full text-[2rem] lg:text-[2.5rem]`,
  },
};

interface PodInputProps extends InputProps {
  styleVariant?: keyof typeof styleVariants;
}

const PodInput = ({ name, styleVariant, ...props }: PodInputProps) => {
  const { control, watch } = useFormContext();

  return (
    <Controller
      control={control}
      name={name || 'name'}
      render={({ field }) => {
        return (
          <Input
            classNames={styleVariants[styleVariant ?? 'default']}
            {...props}
            {...field}
            ref={null}
            value={watch(name || 'name')}
          />
        );
      }}
    />
  );
};

export { PodInput };
export type { PodInputProps };
