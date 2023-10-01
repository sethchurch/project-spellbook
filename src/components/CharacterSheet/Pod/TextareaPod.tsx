import { Textarea } from '@nextui-org/input';

import type { PodProps } from './Pod';
import { Pod } from './Pod';

interface TextareaPodProps extends PodProps {
  name?: string;
  placeholder?: string;
  value?: string;
}

const TextareaPod = ({ name, placeholder, value, ...props }: TextareaPodProps) => {
  return (
    <Pod {...props}>
      <Textarea
        classNames={{ label: 'h-0 p-0', input: 'm-0 p-0', inputWrapper: 'border-none after:h-0 p-0 shadow-none' }}
        name={name}
        placeholder={placeholder}
        value={value}
        variant="underlined"
      />
    </Pod>
  );
};

export { TextareaPod };
