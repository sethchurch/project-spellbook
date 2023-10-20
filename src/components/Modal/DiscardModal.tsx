import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import type { MouseEventHandler } from 'react';

interface DiscardModalProps {
  body?: string | JSX.Element;
  cancelAction?: (...args: any[]) => any;
  confirmAction?: (...args: any[]) => any;
  isOpen: boolean;
  title: string;
}

const DiscardModal = ({ body, cancelAction, confirmAction, isOpen, title }: DiscardModalProps) => {
  const handleConfirmAction: MouseEventHandler<HTMLButtonElement> = () => {
    if (confirmAction) confirmAction();
  };

  const handleCancelAction: MouseEventHandler<HTMLButtonElement> = () => {
    if (cancelAction) cancelAction();
  };

  return (
    <Modal isOpen={isOpen} placement="center" size="md">
      <ModalContent>
        <ModalHeader className="px-6">{title}</ModalHeader>
        <ModalBody className="px-6 py-3">{body || 'Are you sure you want to delete this?'}</ModalBody>
        <ModalFooter>
          <Button onClick={handleCancelAction}>Cancel</Button>
          <Button color="danger" onClick={handleConfirmAction}>
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export { DiscardModal };
export type { DiscardModalProps };
