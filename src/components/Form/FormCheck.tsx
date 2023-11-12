'use client';

import { Checkbox, type CheckboxProps } from '@nextui-org/checkbox';
import { Controller, useFormContext } from 'react-hook-form';

interface FormCheckProps extends CheckboxProps {
  name: string;
}

const FormCheck = ({ name, ...props }: FormCheckProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, ...field } }) => <Checkbox {...props} {...field} isSelected={value} />}
    />
  );
};

export { FormCheck };
