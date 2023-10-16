'use client';

import { Button } from '@nextui-org/button';
import { IconSettings } from '@tabler/icons-react';

import { useTavernState } from '@/hooks/useTavernState';

const TavernContextButton = () => {
  const toggleEditMode = useTavernState((state) => state.toggleEditMode);

  return (
    <Button
      isIconOnly
      className="absolute bottom-5 right-5"
      color="primary"
      radius="full"
      size="lg"
      onClick={toggleEditMode}
    >
      <IconSettings />
    </Button>
  );
};

export { TavernContextButton };
