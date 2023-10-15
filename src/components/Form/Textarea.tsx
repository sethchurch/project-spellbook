'use client';

import type { TextAreaProps as NextTextAreaProps } from '@nextui-org/input';
import { Textarea as NextTextarea } from '@nextui-org/input';
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
  basic: {},
};

interface TextareaProps extends NextTextAreaProps {
  styleVariant?: keyof typeof styleVariants;
}

const Textarea = ({ name, placeholder, styleVariant, ...props }: TextareaProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name || 'name'}
      render={({ field }) => (
        <NextTextarea
          classNames={{ ...styleVariants[styleVariant ?? 'default'], label: props.label ? '' : 'hidden' }}
          placeholder={placeholder || loremIpsum.repeat(1)}
          radius="md"
          {...props}
          {...field}
        />
      )}
    />
  );
};

export { Textarea };
