import { Textarea } from '@nextui-org/input';
import { useFormContext } from 'react-hook-form';

import type { PodProps } from './Pod';
import { Pod } from './Pod';

interface TextareaPodProps extends PodProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  value?: string;
  name: string;
}

const TextareaPod = ({ placeholder, value, name, ...props }: TextareaPodProps) => {
  const { register } = useFormContext();

  return (
    <Pod {...props}>
      <Textarea
        classNames={{ label: 'h-0 p-0', input: 'm-0 p-0', inputWrapper: 'border-none after:h-0 p-0 shadow-none' }}
        placeholder={placeholder}
        value={value}
        variant="underlined"
        {...register(name)}
      />
    </Pod>
  );
};

export { TextareaPod };
