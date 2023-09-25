'use client';

import { AppShell, Box, Burger, Button, Grid, Input } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPlus } from '@tabler/icons-react';

import { BasicCreatorModal } from '@/components/BasicCreatorModal';
import { CharacterNavSkeleton } from '@/components/CharacterNavSkeleton';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle';
import { NavHeader } from '@/components/NavHeader';
import { SideNav } from '@/components/SideNav';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [sidenavOpened, { toggle: toggleSidenav }] = useDisclosure(true);
  const collapsed = { mobile: !sidenavOpened, desktop: !sidenavOpened };

  const [modalOpened, { open: openModal, close: closeModal }] = useDisclosure(false);

  return (
    <AppShell
      header={{ height: 60 }}
      layout="alt"
      navbar={{ width: 300, breakpoint: 'sm', collapsed }}
      padding="md"
      withBorder={false}
    >
      <NavHeader>
        <Grid w="100%">
          <Grid.Col span={4}>
            <Burger opened={sidenavOpened} size="sm" onClick={toggleSidenav} />
          </Grid.Col>
          <Grid.Col span={4}>
            <Input />
          </Grid.Col>
          <Grid.Col className="flex items-center" span={1}>
            <ColorSchemeToggle />
          </Grid.Col>
        </Grid>
      </NavHeader>

      <SideNav>
        <Input />
        <Button onClick={openModal}>
          <IconPlus stroke={3} />
        </Button>
        <CharacterNavSkeleton />
      </SideNav>

      <AppShell.Main>
        <Box p="lg">{children}</Box>
      </AppShell.Main>

      <BasicCreatorModal close={closeModal} opened={modalOpened} />
    </AppShell>
  );
};

export default AppLayout;
