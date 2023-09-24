import type { LinkProps } from 'next/link';
import NextLink from 'next/link';

interface ModifiedLinkProps extends LinkProps {
  children: React.ReactNode;
}

const Link = ({ children, ...props }: ModifiedLinkProps) => {
  return (
    <NextLink className="text-inherit no-underline" {...props}>
      {children}
    </NextLink>
  );
};

export { Link };
