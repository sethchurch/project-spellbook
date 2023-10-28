'use client';

import type { RegisterOptions } from 'react-hook-form';
import { Controller, useFormContext } from 'react-hook-form';

import type { InputProps } from '@/components/Elements/Input';
import { Input } from '@/components/Elements/Input';

interface FormInputProps extends InputProps {
  name: string;
  watchFlag?: boolean;
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
}

const FormInput = ({ name, watchFlag, rules, ...props }: FormInputProps) => {
  const { control, watch } = useFormContext();

  return (
    <Controller
      control={control}
      name={name || 'name'}
      render={({ field }) => {
        return <Input {...props} {...field} ref={null} value={(watchFlag ? watch(name) : field.value) || ''} />;
      }}
      rules={rules}
    />
  );
};

export { FormInput };
