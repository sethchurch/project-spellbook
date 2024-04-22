import type { ButtonProps } from '@nextui-org/button';
import { Button as NextButton } from '@nextui-org/button';

const Button = ({ children, ...props }: ButtonProps) => {
  return <NextButton {...props}>{children}</NextButton>;
};

export { Button };
