'use client';

import { TavernContextButton } from './TavernContextButton';

interface TavernLayoutProps {
  children?: React.ReactNode;
}

const TavernLayout = ({ children }: TavernLayoutProps) => {
  return (
    <>
      {children}
      <TavernContextButton />
    </>
  );
};

export default TavernLayout;
