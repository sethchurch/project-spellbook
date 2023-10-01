import type { TextAreaProps } from '@nextui-org/input';
import { Textarea } from '@nextui-org/input';
import { Controller, useFormContext } from 'react-hook-form';

const PodTextarea = ({ name, ...props }: TextAreaProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name || 'name'}
      render={({ field }) => (
        <Textarea
          classNames={{ label: 'h-0 p-0', input: 'm-0 p-0', inputWrapper: 'border-none after:h-0 p-0 shadow-none' }}
          variant="underlined"
          {...props}
          {...field}
        />
      )}
    />
  );
};

export { PodTextarea };
