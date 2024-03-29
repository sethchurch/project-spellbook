'use client';

import { Button } from '@nextui-org/button';
import type { ModalProps } from '@nextui-org/modal';
import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/modal';
import { useMutation } from '@tanstack/react-query';
import { useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { FormInput } from '@/components/Form/FormInput';
import { Textarea } from '@/components/Form/Textarea';
import type { Character } from '@/config/CharacterConfig';
import { useCharacterStore } from '@/hooks/useCharacterStore';
import { client } from '@/utils/apiClient';
import { parseJSON } from '@/utils/parseJSON';

const BasicCreatorModal = ({ isOpen, onClose }: Partial<ModalProps>) => {
  const addCharacter = useCharacterStore((state) => state.addCharacter);
  const formMethods = useForm({ defaultValues: { name: '', backstory: '', level: 1 } });
  const { getValues } = formMethods;
  const toastId = useRef<string>('');

  const { mutate: generateCharacter } = useMutation({
    mutationFn: async () => client('/api/wizard', { data: getValues() }),
    onMutate: () => {
      toastId.current = toast.loading(`Generating... You may safely navigate away from this page just don't refresh`);
      if (onClose) onClose();
    },
    onSuccess: (data: any) => {
      const characterFields = getValues();
      const characterData = parseJSON<Character>(data.function_call.arguments) as Character;
      addCharacter({ ...characterData, ...characterFields });
      toast.success(`${characterFields.name} has been added to your character list.`, { id: toastId.current });
    },
    onError: (error: Error) => toast.error(error.message, { id: toastId.current }),
    onSettled: () => formMethods.reset(),
  });

  const onSubmit = () => {
    generateCharacter();
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
              <FormInput
                description="What level do you want this character to be?"
                label="Character Level"
                max={20}
                min={1}
                name="level"
                styleVariant="basic"
                type="number"
              />
              <Textarea
                description="Who are they and what is their story?"
                label="Character Backstory"
                minRows={30}
                name="backstory"
                styleVariant="basic"
              />
              <Button color="primary" onClick={onSubmit}>
                Generate
              </Button>
            </div>
          </ModalBody>
        </FormProvider>
      </ModalContent>
    </Modal>
  );
};

export { BasicCreatorModal };
