import { AppShell, Stack } from '@mantine/core';

interface SideNavProps {
  children: React.ReactNode;
}

const SideNav = ({ children }: SideNavProps) => {
  return (
    <AppShell.Navbar bg="dark.7" p="md">
      <Stack> {children} </Stack>
    </AppShell.Navbar>
  );
};

export { SideNav };
