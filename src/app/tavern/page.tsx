'use client';

import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { BasicCreatorModal } from '@/components/BasicCreatorModal';

const Tavern = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <BasicCreatorModal close={close} opened={opened} />
      <Button onClick={open}>Open modal</Button>
    </>
  );
};

export default Tavern;
