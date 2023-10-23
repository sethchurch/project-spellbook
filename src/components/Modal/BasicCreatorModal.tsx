'use client';

import { Button } from '@nextui-org/button';
import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { FormInput } from '@/components/Form/FormInput';
import { Textarea } from '@/components/Form/Textarea';

interface BasicCreatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BasicCreatorModal = ({ isOpen, onClose }: BasicCreatorModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formMethods = useForm({ defaultValues: { name: '', backstory: '' } });
  const { getValues } = formMethods;

  const { mutate: generate } = useMutation({
    mutationFn: async (payload: object) => {
      const response = await fetch('/api/wizard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      return response.json();
    },
    onMutate: () => {
      setIsSubmitting(true);
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const getCharacter = () => {
    const formValue = getValues();
    const newCharacter = generate(formValue);
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
                {isSubmitting ? 'Generating...' : 'Generate'}
              </Button>
            </div>
          </ModalBody>
        </FormProvider>
      </ModalContent>
    </Modal>
  );
};

export { BasicCreatorModal };
