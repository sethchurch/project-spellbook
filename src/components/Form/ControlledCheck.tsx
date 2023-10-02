import { Checkbox, type CheckboxProps } from '@nextui-org/react';
import { Controller, useFormContext } from 'react-hook-form';

interface ControlledCheckProps extends CheckboxProps {
  name: string;
}

const ControlledCheck = ({ name, ...props }: ControlledCheckProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, ...field } }) => <Checkbox {...props} {...field} isSelected={value} />}
    />
  );
};

export { ControlledCheck };
