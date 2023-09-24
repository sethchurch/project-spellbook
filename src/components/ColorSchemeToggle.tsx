import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

const ColorSchemeToggle = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const isDarkMode = computedColorScheme === 'dark';

  return (
    <ActionIcon
      aria-label="Toggle color scheme"
      size="lg"
      variant="default"
      onClick={() => setColorScheme(isDarkMode ? 'light' : 'dark')}
    >
      {isDarkMode ? <IconSun size={22} stroke={2} /> : <IconMoon size={22} stroke={2} />}
    </ActionIcon>
  );
};

export { ColorSchemeToggle };
