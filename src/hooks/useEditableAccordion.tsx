import { Button } from '@nextui-org/button';
import { useDisclosure } from '@nextui-org/react';
import { IconX } from '@tabler/icons-react';
import { useRef, useState } from 'react';

interface EditableAccordionProps {
  remove: (index: number) => void;
}

const useEditableAccordion = ({ remove }: EditableAccordionProps) => {
  const { isOpen, onOpen: openDiscardModal, onClose } = useDisclosure();
  const [isEditing, setIsEditing] = useState(false);
  const deleteTarget = useRef<number | null>(null);

  const getDeleteOnClick = (index: number) => {
    return () => {
      deleteTarget.current = index;
      openDiscardModal();
    };
  };

  const handleDelete = () => {
    if (deleteTarget.current === null) return;
    remove(deleteTarget.current);
    deleteTarget.current = null;
  };

  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  const getAccordionItemProps = (index: number) => {
    return {
      disableIndicatorAnimation: isEditing,
      indicator: isEditing ? (
        <Button isIconOnly color="danger" onClick={getDeleteOnClick(index)}>
          <IconX />
        </Button>
      ) : undefined,
    };
  };

  const getDiscardModalProps = () => {
    return {
      confirmAction: handleDelete,
      isOpen,
      onClose,
    };
  };

  return { isEditing, toggleEditing, getAccordionItemProps, getDiscardModalProps };
};

export { useEditableAccordion };
