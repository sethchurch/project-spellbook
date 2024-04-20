import { Button } from '@nextui-org/button';
import { useDisclosure } from '@nextui-org/modal';
import { Tooltip } from '@nextui-org/react';
import { IconPhotoCog } from '@tabler/icons-react';

import { CharacterImageModal } from '../Modal/CharacterImageModal';

// interface CharacterImageEditButtonProps {
// 	aspectRatio?: string;
// }

const CharacterImageEditButton = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Tooltip color="primary" content="Coming Soon!" placement="top">
        <div className="m-3 self-end opacity-0 transition-opacity group-hover:opacity-100">
          <Button isDisabled isIconOnly size="lg" onClick={onOpen}>
            <IconPhotoCog />
          </Button>
        </div>
      </Tooltip>
      <CharacterImageModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export { CharacterImageEditButton };
