'use client';

import { Button } from '@nextui-org/button';

import { useMounted } from '@/hooks/useMounted';
import { useThemeSwitch } from '@/hooks/useThemeSwitch';

import { Icon } from './Icon';

const ToggleThemeButton = ({ ...props }) => {
  const mounted = useMounted();
  const { theme, switchTheme } = useThemeSwitch();

  return (
    <Button isIconOnly className="justify-self-end" onClick={switchTheme} {...props}>
      {mounted ? <Icon icon={theme === 'light' ? 'moon' : 'sun'} /> : <Icon icon="sun" />}
    </Button>
  );
};

export { ToggleThemeButton };
