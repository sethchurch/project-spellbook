import type { SelectProps as NextSelectProps } from '@nextui-org/select';
import { Select as NextSelect } from '@nextui-org/select';

const styleVariants = {
  default: {},
};

interface SelectProps extends NextSelectProps {
  styleVariant?: keyof typeof styleVariants;
}

const Select = ({ styleVariant, children, ...props }: SelectProps) => {
  return (
    <NextSelect classNames={styleVariants[styleVariant ?? 'default']} radius="sm" {...props}>
      {children}
    </NextSelect>
  );
};

export { Select };
export type { SelectProps };
