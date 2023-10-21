'use client';

import { useQuery } from '@tanstack/react-query';

import { TavernContextButton } from './TavernContextButton';

interface TavernLayoutProps {
  children?: React.ReactNode;
}

const TavernLayout = ({ children }: TavernLayoutProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ['characters'],
    queryFn: () => fetch('/api/characters').then((res) => res.json()),
  });
  return (
    <>
      {children}
      <TavernContextButton />
    </>
  );
};

export default TavernLayout;
