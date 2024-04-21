'use client';

import { Button } from '@nextui-org/button';
import { IconSettings } from '@tabler/icons-react';

import { useTavernState } from '@/hooks/useTavernState';
import { cn } from '@/utils/cn';

const TavernContextButton = () => {
  const { toggleEditMode, isEditing } = useTavernState((state) => ({
    toggleEditMode: state.toggleEditMode,
    isEditing: state.isEditing,
  }));

  const animationClassName = isEditing ? 'rotate-90' : 'rotate-0';

  return (
    <div className="fixed bottom-6 right-6 rounded-full shadow-xl transition-all hover:shadow-sm">
      <Button isIconOnly color="primary" radius="full" size="lg" onClick={toggleEditMode}>
        <IconSettings className={cn('transition-all', animationClassName)} />
      </Button>
    </div>
  );
};

export { TavernContextButton };
