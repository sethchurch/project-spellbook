'use client';

import { Button } from '@nextui-org/button';
import { Modal, ModalBody, ModalContent, ModalHeader, Tooltip, useDisclosure } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';

import type { Character } from '@/config/CharacterConfig';
import { useCharacterStore } from '@/hooks/useCharacterStore';

import { BasicCreatorModal } from './BasicCreatorModal';

interface NewCharacterModalProps {
  isOpen: boolean;
  close: () => void;
}

const NewCharacterModal = ({ isOpen, close }: NewCharacterModalProps) => {
  const formMethods = useForm();
  const router = useRouter();
  const { isOpen: modalAiCreatorIsOpen, onClose, onOpen } = useDisclosure();
  const addCharacter = useCharacterStore((state) => state.addCharacter);

  const handleClose = () => {
    [onClose, close].forEach((fn) => fn());
  };

  const handleCreateBlankCharacter = () => {
    const newCharacter: Partial<Character> = { name: 'New Character' };
    if (addCharacter) {
      const characterId = addCharacter(newCharacter);
      router.push(`/characters/${characterId}`);
    }
    close();
  };

  return (
    <>
      <Modal isOpen={isOpen} placement="center" size="sm" onClose={close}>
        <ModalContent>
          <FormProvider {...formMethods}>
            <ModalHeader className="px-6 pb-3 pt-6">Create a New Character</ModalHeader>
            <ModalBody className="px-6 pb-6">
              <Tooltip color="primary" content="Coming Soon!" placement="top">
                <Button variant="flat">Create with Advanced AI Creator</Button>
              </Tooltip>
              <Button onClick={onOpen}>Create with Basic AI Creator</Button>
              <Button onClick={handleCreateBlankCharacter}>Create Blank Character</Button>
            </ModalBody>
          </FormProvider>
        </ModalContent>
      </Modal>
      <BasicCreatorModal isOpen={modalAiCreatorIsOpen} onClose={handleClose} />
    </>
  );
};

export { NewCharacterModal };
