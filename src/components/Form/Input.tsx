'use client';

import type { InputProps as NextInputProps } from '@nextui-org/input';
import { Input as NextInput } from '@nextui-org/input';
import { Controller, useFormContext } from 'react-hook-form';

interface InputProps extends NextInputProps {
  name: string;
}

const Input = ({ name, ...props }: InputProps) => {
  const { control } = useFormContext();
  return <Controller control={control} name={name} render={({ field }) => <NextInput {...props} {...field} />} />;
};

export { Input };
