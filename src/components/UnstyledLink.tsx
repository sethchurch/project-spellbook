import { Text } from '@mantine/core';
import Link from 'next/link';

interface UnstyledLinkProps {
  children: React.ReactNode;
  href: string;
}

const UnstyledLink = ({ children, href }: UnstyledLinkProps) => {
  return (
    <Link href={href} className="text-inherit no-underline">
      <Text>{children}</Text>
    </Link>
  );
};

export default UnstyledLink;
