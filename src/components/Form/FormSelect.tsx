import { Controller, useFormContext } from 'react-hook-form';

import { Select, type SelectProps } from '@/components/Elements/Select';

interface FormSelectProps extends SelectProps {
  name: string;
}

const FormSelect = ({ name, defaultSelectedKeys, ...props }: FormSelectProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <Select
            disallowEmptySelection
            {...props}
            {...field}
            ref={null}
            selectedKeys={field.value ? [field.value] : defaultSelectedKeys}
          />
        );
      }}
    />
  );
};

export { FormSelect };
