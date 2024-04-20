import { Button } from '@nextui-org/button';
import { Modal, ModalBody, ModalContent, type ModalProps } from '@nextui-org/modal';
import { Tooltip } from '@nextui-org/react';
import { IconUpload } from '@tabler/icons-react';

import { Backline } from '@/components/Elements/Backline';

interface CharacterImageModalProps extends Partial<ModalProps> {}

const CharacterImageModal = ({ isOpen, onClose }: CharacterImageModalProps) => {
  return (
    <Modal isOpen={isOpen} placement="center" size="lg" onClose={onClose}>
      <ModalContent>
        <ModalBody className="p-6">
          <div className="flex flex-col gap-6">
            <div className="w-full text-center">Upload an Image</div>
            <div className="flex h-64 w-full items-center justify-center border-3 border-dotted border-stone-300 dark:border-zinc-700">
              <IconUpload />
            </div>
            <Backline>
              <div className="w-full text-center">Or</div>
            </Backline>
            <div className="mx-auto">
              <Tooltip color="primary" content="Coming Soon!" placement="top">
                <Button size="lg" variant="flat">
                  Generate using AI
                </Button>
              </Tooltip>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export { CharacterImageModal };
