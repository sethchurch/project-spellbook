'use client';

import type { TextAreaProps } from '@nextui-org/input';
import { Textarea } from '@nextui-org/input';
import { Controller, useFormContext } from 'react-hook-form';

import { loremIpsum } from '@/config/dummyData';

const styleVariants = {
  default: {
    label: 'h-0 p-0',
    inputWrapper: 'border-none after:h-0 shadow-none bg-transparent !p-3',
    input: 'm-0 p-0 rounded-lg',
  },
  inset: {
    input: 'px-3 py-5 rounded-lg',
  },
  unstyled: {},
};

interface PodTextareaProps extends TextAreaProps {
  styleVariant?: keyof typeof styleVariants;
}

const PodTextarea = ({ name, placeholder, styleVariant, ...props }: PodTextareaProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name || 'name'}
      render={({ field }) => (
        <Textarea
          classNames={styleVariants[styleVariant ?? 'default']}
          placeholder={placeholder || loremIpsum.repeat(5)}
          radius="md"
          {...props}
          {...field}
        />
      )}
    />
  );
};

export { PodTextarea };
