import { Button } from '@nextui-org/button';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import { FormProvider, useForm } from 'react-hook-form';

import { FormInput } from '@/components/Form/FormInput';

interface ResetPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const ResetPasswordModal = ({ isOpen, onClose }: ResetPasswordModalProps) => {
  const methods = useForm<{ email: string }>({ mode: 'onChange' });

  return (
    <Modal isDismissable isOpen={isOpen} placement="center" size="md" onClose={onClose}>
      <ModalContent>
        <FormProvider {...methods}>
          <form action="/api/auth/reset" method="post">
            <ModalHeader className="px-6">Reset Password</ModalHeader>
            <ModalBody className="px-6 py-3">
              <FormInput
                isRequired
                description="Please enter your email"
                label="Email"
                name="email"
                styleVariant="basic"
                type="email"
              />
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button color="primary" type="submit">
                Submit
              </Button>
            </ModalFooter>
          </form>
        </FormProvider>
      </ModalContent>
    </Modal>
  );
};

export { ResetPasswordModal };
