'use client';

import type { TextAreaProps as NextTextAreaProps } from '@nextui-org/input';
import { Textarea as NextTextarea } from '@nextui-org/input';
import { Controller, useFormContext } from 'react-hook-form';

import { cn } from '@/utils/cn';

const styleVariants = {
  default: {
    label: 'h-0 p-0',
    inputWrapper: 'border-none after:h-0 shadow-none bg-transparent !p-3 -mb-1 rounded-md',
    input: 'm-0 p-0',
  },
  inset: {
    input: 'px-3 py-5',
  },
  basic: {},
  grow: {
    input: 'resize-none !h-full',
    inputWrapper: '!h-full items-start rounded-md -mb-1 bg-transparent',
    base: '!h-full !max-h-full',
    description: 'hidden',
  },
};

interface TextareaProps extends NextTextAreaProps {
  styleVariant?: keyof typeof styleVariants;
  className?: string;
}

const Textarea = ({ name, placeholder, styleVariant, className, ...props }: TextareaProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name || 'name'}
      render={({ field }) => (
        <NextTextarea
          className={cn(className)}
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
