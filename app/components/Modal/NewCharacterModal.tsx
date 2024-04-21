'use client';

import { Button } from '@nextui-org/button';
import type { ModalProps } from '@nextui-org/modal';
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/modal';
import { Tooltip } from '@nextui-org/react';
import { useNavigate } from '@remix-run/react';
import { IconWand } from '@tabler/icons-react';
import { FormProvider, useForm } from 'react-hook-form';

import type { Character } from '@/config/CharacterConfig';
import { useCharacterStore } from '@/hooks/useCharacterStore';

import { Backline } from '../Elements/Backline';
import { BasicCreatorModal } from './BasicCreatorModal';

interface NewCharacterModalProps extends Partial<ModalProps> {
  close: () => void;
}

const NewCharacterModal = ({ isOpen, close }: NewCharacterModalProps) => {
  const formMethods = useForm();
  const navigate = useNavigate();
  const { isOpen: modalAiCreatorIsOpen, onClose, onOpen } = useDisclosure();
  const addCharacter = useCharacterStore((state) => state.addCharacter);

  const handleClose = () => {
    [onClose, close].forEach((fn) => fn());
  };

  const handleCreateBlankCharacter = () => {
    const newCharacter: Partial<Character> = { name: 'New Character' };
    if (addCharacter) {
      const characterId = addCharacter(newCharacter);
      navigate(`/characters/${characterId}`);
    }
    close();
  };

  return (
    <>
      <Modal isOpen={isOpen} placement="center" size="sm" onClose={close}>
        <ModalContent>
          <FormProvider {...formMethods}>
            <ModalHeader className="px-6 pb-3 pt-6">
              <p className="w-full text-center">Create a New Character</p>
            </ModalHeader>
            <ModalBody className="px-6 pb-6">
              <Button onClick={handleCreateBlankCharacter}>Create Blank Character</Button>
              <Backline>Or use AI</Backline>
              <Button onClick={onOpen}>
                <IconWand /> Create from Backstory
              </Button>
              <Tooltip color="primary" content="Coming Soon!" placement="top">
                <Button variant="flat">
                  <IconWand /> Create from Stat Block
                </Button>
              </Tooltip>
              <Tooltip color="primary" content="Coming Soon!" placement="top">
                <Button variant="flat">
                  <IconWand /> Create from Picture
                </Button>
              </Tooltip>
            </ModalBody>
          </FormProvider>
        </ModalContent>
      </Modal>
      <BasicCreatorModal isOpen={modalAiCreatorIsOpen} onClose={handleClose} />
    </>
  );
};

export { NewCharacterModal };
