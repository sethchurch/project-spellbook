import type { ChangeEvent, ReactElement } from 'react';
import { cloneElement } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface CheckCounterProps {
  CheckComponent: ReactElement;
  max: number;
  name: string;
}

const CheckCounter = ({ CheckComponent, max, name }: CheckCounterProps) => {
  const { control, getValues, setValue } = useFormContext();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const counterValue = getValues(name);
    const { checked } = e.target;
    setValue(name, counterValue + (checked ? 1 : -1));
  };

  return Array(max)
    .fill(undefined)
    .map((_, index) => (
      <Controller
        key={index}
        control={control}
        name={name}
        render={({ field: { value, ...field } }) =>
          cloneElement(CheckComponent, {
            ...field,
            key: index,
            isSelected: index < value,
            checked: index < value,
            onChange,
          })
        }
      />
    ));
};

export { CheckCounter };
