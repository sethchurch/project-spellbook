import { Button } from '@nextui-org/react';
import { IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes';

const ToggleThemeButton = ({ ...props }) => {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button isIconOnly className="justify-self-end" onClick={switchTheme} {...props}>
      <IconSun />
    </Button>
  );
};

export { ToggleThemeButton };
