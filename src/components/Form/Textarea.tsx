'use client';

import type { TextAreaProps as NextTextAreaProps } from '@nextui-org/input';
import { Textarea as NextTextarea } from '@nextui-org/input';
import { Controller, useFormContext } from 'react-hook-form';

const styleVariants = {
  default: {
    label: 'h-0 p-0',
    inputWrapper: 'border-none after:h-0 shadow-none bg-transparent !p-3',
    input: 'm-0 p-0',
  },
  inset: {
    input: 'px-3 py-5',
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
          placeholder={placeholder}
          radius="md"
          {...props}
          {...field}
          value={field.value || ''}
        />
      )}
    />
  );
};

export { Textarea };
