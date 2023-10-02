import { Chip } from '@nextui-org/chip';
import type { InputProps } from '@nextui-org/input';
import { Input } from '@nextui-org/input';
import { Controller, useFormContext } from 'react-hook-form';

const classNameInputVariants = {
  max: {
    base: 'h-full',
    label: 'text-center m-auto',
    inputWrapper: 'border-none after:h-0 p-0 shadow-none h-full bg-transparent gap-0',
    input: `m-0 p-0 text-center h-full text-[1.75rem]`,
  },
  current: {
    base: 'h-full',
    label: 'text-center m-auto',
    inputWrapper: 'border-none after:h-0 p-0 shadow-none h-full bg-transparent gap-0',
    input: `m-0 p-0 text-center h-full text-[1.75rem]`,
  },
};

const PodResource = ({ name, ...props }: InputProps) => {
  const { control } = useFormContext();

  if (!name) {
    throw new Error('PodResource requires a name prop');
  }

  return (
    <div className="grid h-full grid-rows-2 items-center justify-center gap-3 xl:grid-cols-2 xl:grid-rows-none">
      <Controller
        control={control}
        name={`${name}.current`}
        render={({ field }) => (
          <div className="flex flex-col items-center gap-3">
            <Input classNames={classNameInputVariants.current} {...props} {...field} />
            <Chip className="w-full max-w-full text-center" size="sm" variant="faded">
              Current
            </Chip>
          </div>
        )}
      />
      <Controller
        control={control}
        name={`${name}.max`}
        render={({ field }) => (
          <div className="flex flex-col items-center gap-3 ">
            <Input classNames={classNameInputVariants.max} {...props} {...field} />
            <Chip className="w-full max-w-full text-center" size="sm" variant="faded">
              Max
            </Chip>
          </div>
        )}
      />
    </div>
  );
};

export { PodResource };
