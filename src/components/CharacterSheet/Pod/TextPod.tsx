import { Input } from '@nextui-org/input';

import type { PodProps } from './Pod';
import { Pod } from './Pod';

interface TextPodProps extends PodProps {
  name?: string;
  placeholder?: string;
  value?: string;
}

const TextPod = ({ name, placeholder, value, ...props }: TextPodProps) => {
  return (
    <Pod {...props}>
      <Input
        classNames={{
          base: 'h-full',
          label: 'h-0 p-0',
          inputWrapper: 'border-none after:h-0 p-0 shadow-none h-full',
          input: `m-0 p-0 text-center h-full text-[2.5rem]`,
        }}
        name={name}
        placeholder={placeholder}
        value={value}
        variant="underlined"
      />
    </Pod>
  );
};

export { TextPod };
