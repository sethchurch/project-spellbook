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
      <Button isIconOnly={iconOnly} radius="sm" size={iconOnly ? 'sm' : 'md'} variant="flat" onClick={onEdit}>
        {iconOnly ? <IconSettings size={20} /> : `Edit ${itemName ?? 'Item'}s`}
      </Button>
      <Button color="primary" isIconOnly={iconOnly} radius="sm" size={iconOnly ? 'sm' : 'md'} onClick={onAdd}>
        {iconOnly ? <IconPlus size={20} /> : `Add ${itemName ?? 'Item'}`}
      </Button>
    </div>
  );
};

export { AddEditButtons };
