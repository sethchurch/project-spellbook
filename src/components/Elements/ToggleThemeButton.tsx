'use client';

import { Button } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Icon } from './Icon';

const ToggleThemeButton = ({ ...props }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button isIconOnly className="justify-self-end" onClick={switchTheme} {...props}>
      {mounted ? <Icon icon={theme === 'light' ? 'moon' : 'sun'} /> : <Icon icon="sun" />}
    </Button>
  );
};

export { ToggleThemeButton };
