import type { LinkProps } from '@remix-run/react';
import { Link as RemixLink } from '@remix-run/react';

interface ModifiedLinkProps extends LinkProps {
  children: React.ReactNode;
}

const Link = ({ children, to, ...props }: ModifiedLinkProps) => {
  return (
    <RemixLink className="text-inherit no-underline" to={to} {...props}>
      {children}
    </RemixLink>
  );
};

export { Link };
