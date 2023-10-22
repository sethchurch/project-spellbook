import { useTheme } from 'next-themes';

const useThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return { theme, switchTheme };
};

export { useThemeSwitch };
