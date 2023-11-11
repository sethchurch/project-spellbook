import { Button } from '@nextui-org/button';

interface AddEditButtonsProps {
  itemName?: string;
  onAdd?: () => void;
  onEdit?: () => void;
}

const AddEditButtons = ({ itemName, onAdd, onEdit }: AddEditButtonsProps) => {
  return (
    <div className="flex gap-3 self-end">
      <Button radius="sm" onClick={onEdit}>
        Edit {itemName ?? 'Item'}s
      </Button>
      <Button color="primary" radius="sm" onClick={onAdd}>
        Add {itemName ?? 'Item'}
      </Button>
    </div>
  );
};

export { AddEditButtons };
