'use client';

import { Button } from '@nextui-org/button';
import { Textarea } from '@nextui-org/input';
import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react';
import { FormProvider, useForm } from 'react-hook-form';

import { FormInput } from '../Form/FormInput';

interface BasicCreatorModalProps {
  isOpen: boolean;
  close: () => void;
}

const BasicCreatorModal = ({ isOpen, close }: BasicCreatorModalProps) => {
  const formMethods = useForm();

  return (
    <Modal isOpen={isOpen} placement="center" size="2xl" onClose={close}>
      <ModalContent>
        <FormProvider {...formMethods}>
          <ModalHeader className="p-6">Character Creator</ModalHeader>
          <ModalBody className="px-6 pb-8">
            <div className="flex-stack">
              <FormInput
                description="What's is the name of this character?"
                label="Character Name"
                styleVariant="basic"
              />
              <Textarea description="Who are they and what is their story?" label="Character Backstory" minRows={30} />
              <Button onClick={close}>Create</Button>
            </div>
          </ModalBody>
        </FormProvider>
      </ModalContent>
    </Modal>
  );
};

export { BasicCreatorModal };
