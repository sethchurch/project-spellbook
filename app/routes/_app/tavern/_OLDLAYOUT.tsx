import { Outlet } from '@remix-run/react';

import { TavernContextButton } from './TavernContextButton';

const TavernLayout = () => {
  return (
    <>
      <Outlet />
      <TavernContextButton />
    </>
  );
};

export default TavernLayout;
