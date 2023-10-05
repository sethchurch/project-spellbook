import { Controller, useFormContext } from 'react-hook-form';

import { Pod } from './Pod';
import { PodInput } from './PodInput';

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
            <PodInput inputVariant="jumbo" {...field} name={`${name}.current`} />
          </Pod>
        )}
      />
      <Controller
        control={control}
        name={`${name}.max`}
        render={({ field }) => (
          <Pod label="Max">
            <PodInput inputVariant="jumbo" {...field} name={`${name}.max`} />
          </Pod>
        )}
      />
    </div>
  );
};

export { PodResource };
