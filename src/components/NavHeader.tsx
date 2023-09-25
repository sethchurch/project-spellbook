import { AppShellHeader, Group } from '@mantine/core';

interface NavHeaderProps {
  children: React.ReactNode;
}

const NavHeader = ({ children }: NavHeaderProps) => {
  return (
    <AppShellHeader bg="dark.7">
      <Group h="100%" px="md">
        {children}
      </Group>
    </AppShellHeader>
  );
};

export { NavHeader };
