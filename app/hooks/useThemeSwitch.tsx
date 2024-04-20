// TODO fix this remix
const useTheme = () => {
  return { theme: 'dark', setTheme: () => {} };
};

const useThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return { theme, switchTheme };
};

export { useThemeSwitch };
