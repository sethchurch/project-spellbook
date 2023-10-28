import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import type { MouseEventHandler } from 'react';

interface DiscardModalProps {
  body?: string | JSX.Element;
  cancelAction?: (...args: any[]) => any;
  confirmAction?: (...args: any[]) => any;
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

const DiscardModal = ({ body, cancelAction, confirmAction, isOpen, title, onClose }: DiscardModalProps) => {
  const handleConfirmAction: MouseEventHandler<HTMLButtonElement> = () => {
    if (confirmAction) confirmAction();
    onClose();
  };

  const handleCancelAction = () => {
    if (cancelAction) cancelAction();
    onClose();
  };

  return (
    <Modal isDismissable isOpen={isOpen} placement="center" size="md" onClose={handleCancelAction}>
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