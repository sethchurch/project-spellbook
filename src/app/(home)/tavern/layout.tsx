'use client';

import { trpc } from '@/app/_trpc/client';

import { TavernContextButton } from './TavernContextButton';

interface TavernLayoutProps {
  children?: React.ReactNode;
}

const TavernLayout = ({ children }: TavernLayoutProps) => {
  const { data } = trpc.test.useQuery();

  console.log({ data });
  return (
    <>
      {children}
      <TavernContextButton />
    </>
  );
};

export default TavernLayout;
