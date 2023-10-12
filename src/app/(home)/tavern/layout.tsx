'use client';

interface TavernLayoutProps {
  children?: React.ReactNode;
}

const TavernLayout = ({ children }: TavernLayoutProps) => {
  return <div>{children}</div>;
};

export default TavernLayout;
