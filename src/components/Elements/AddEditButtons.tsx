import { Button } from '@nextui-org/button';
import { IconPlus, IconSettings } from '@tabler/icons-react';

import type { PropsWithClassName } from '@/types/propTypes';
import { cn } from '@/utils/cn';

interface AddEditButtonsProps extends PropsWithClassName {
  itemName?: string;
  onAdd?: () => void;
  onEdit?: () => void;
  iconOnly?: boolean;
}

const AddEditButtons = ({ itemName, onAdd, onEdit, className, iconOnly }: AddEditButtonsProps) => {
  return (
    <div className={cn('flex gap-3 self-end', className)}>
      <Button isIconOnly={iconOnly} radius="sm" variant="flat" onClick={onEdit}>
        {iconOnly ? <IconSettings /> : `Edit ${itemName ?? 'Item'}s`}
      </Button>
      <Button color="primary" isIconOnly={iconOnly} radius="sm" onClick={onAdd}>
        {iconOnly ? <IconPlus /> : `Add ${itemName ?? 'Item'}`}
      </Button>
    </div>
  );
};

export { AddEditButtons };
