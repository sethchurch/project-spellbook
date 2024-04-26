'use client';

import type { InputProps as NextInputProps } from '@nextui-org/input';
import { Input as NextFormInput } from '@nextui-org/input';
import { useCallback, useEffect, useRef } from 'react';

const styleVariants = {
  default: {
    base: 'h-full',
    label: 'text-center w-full m-auto',
    inputWrapper: 'border-none after:h-0 p-0 shadow-none h-full bg-transparent gap-0',
    input: `m-0 p-0 text-center h-full text-[2.5rem]`,
  },
  basic: {
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
  inset: {
    inputWrapper: [
      'bg-stone-50',
      'dark:bg-zinc-700',
      'hover:bg-default-100/70',
      'dark:hover:bg-default/70',
      'group-data-[focus=true]:bg-stone-100/100',
      'dark:group-data-[focus=true]:bg-zinc-900/70',
      '!cursor-text',
      'h-full',
    ],
  },
};

interface InputProps extends NextInputProps {
  styleVariant?: keyof typeof styleVariants;
}

const Input = ({ styleVariant, ...props }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'a' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      e.stopPropagation();
      inputRef.current?.select();
    }
  }, []);

  useEffect(() => {
    const input = inputRef.current;
    if (input) input.addEventListener('keydown', handleKeyDown);
    return () => {
      if (input) input.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <NextFormInput
      classNames={styleVariants[styleVariant ?? 'default']}
      isInvalid={!!props.errorMessage}
      radius="sm"
      {...props}
      ref={inputRef}
    />
  );
};

export { Input };
export type { InputProps };
