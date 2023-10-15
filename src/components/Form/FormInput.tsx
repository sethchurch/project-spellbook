'use client';

import { Controller, useFormContext } from 'react-hook-form';

import type { InputProps } from '@/components/Elements/Input';
import { Input } from '@/components/Elements/Input';

interface FormInputProps extends InputProps {
  watchFlag?: boolean;
}

const FormInput = ({ name, watchFlag, ...props }: FormInputProps) => {
  const { control, watch } = useFormContext();

  return (
    <Controller
      control={control}
      name={name || 'name'}
      render={({ field }) => {
        return <Input {...props} {...field} ref={null} value={watchFlag ? watch(name || 'name') : field.value} />;
      }}
    />
  );
};

export { FormInput };
