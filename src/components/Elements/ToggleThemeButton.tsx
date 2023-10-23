'use client';

import type { ButtonProps } from '@nextui-org/button';
import { Button } from '@nextui-org/button';

import { useMounted } from '@/hooks/useMounted';
import { useThemeSwitch } from '@/hooks/useThemeSwitch';
import { cn } from '@/utils/cn';

import { Icon } from './Icon';

interface ToggleThemeButtonProps extends ButtonProps {
  className?: string;
}

const ToggleThemeButton = ({ ...props }: ToggleThemeButtonProps) => {
  const mounted = useMounted();
  const { theme, switchTheme } = useThemeSwitch();

  return (
    <Button isIconOnly className={cn('justify-self-end', props.className)} onClick={switchTheme}>
      {mounted ? <Icon icon={theme === 'light' ? 'moon' : 'sun'} /> : <Icon icon="sun" />}
    </Button>
  );
};

export { ToggleThemeButton };
