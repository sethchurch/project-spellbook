import { Controller, useFormContext } from 'react-hook-form';

import { FormInput } from '@/components/Form/FormInput';

import { Pod } from './Pod';

interface PodResourceProps {
  name: string;
}

const PodResource = ({ name }: PodResourceProps) => {
  const { control } = useFormContext();

  return (
    <div className="grid h-full grid-rows-2 items-center justify-center gap-3 xl:grid-cols-2 xl:grid-rows-none">
      <Controller
        control={control}
        name={`${name}.current`}
        render={({ field }) => (
          <Pod label="Current">
            <FormInput styleVariant="jumbo" {...field} ref={null} name={`${name}.current`} />
          </Pod>
        )}
      />
      <Controller
        control={control}
        name={`${name}.max`}
        render={({ field }) => (
          <Pod label="Max">
            <FormInput styleVariant="jumbo" {...field} ref={null} name={`${name}.max`} />
          </Pod>
        )}
      />
    </div>
  );
};

export { PodResource };
