'use client';

import { Button } from '@nextui-org/button';
import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react';
import { FormProvider, useForm } from 'react-hook-form';

import { FormInput } from '@/components/Form/FormInput';
import { Textarea } from '@/components/Form/Textarea';

interface BasicCreatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BasicCreatorModal = ({ isOpen, onClose }: BasicCreatorModalProps) => {
  const formMethods = useForm();
  const { getValues } = formMethods;

  const getCharacter = () => {
    getValues();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} placement="center" size="2xl" onClose={onClose}>
      <ModalContent>
        <FormProvider {...formMethods}>
          <ModalHeader className="p-6">Character Creator</ModalHeader>
          <ModalBody className="px-6 pb-8">
            <div className="flex-stack">
              <FormInput
                description="What's is the name of this character?"
                label="Character Name"
                name="name"
                styleVariant="basic"
              />
              <Textarea
                description="Who are they and what is their story?"
                label="Character Backstory"
                minRows={30}
                name="backstory"
                styleVariant="basic"
              />
              <Button color="primary" onClick={getCharacter}>
                Create
              </Button>
            </div>
          </ModalBody>
        </FormProvider>
      </ModalContent>
    </Modal>
  );
};

export { BasicCreatorModal };
