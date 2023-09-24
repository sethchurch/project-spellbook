'use client';

import { AppShell, Burger, Button, Container, Grid, Group, Input, Skeleton, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPlus } from '@tabler/icons-react';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      layout="alt"
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Grid w="100%">
            <Grid.Col span={3}>
              <Burger hiddenFrom="sm" opened={mobileOpened} size="sm" onClick={toggleMobile} />
              <Burger opened={desktopOpened} size="sm" visibleFrom="sm" onClick={toggleDesktop} />
            </Grid.Col>
            <Grid.Col span={6}>
              <Input />
            </Grid.Col>
          </Grid>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Stack>
          <Input />
          <Button>
            <IconPlus stroke={3} />
          </Button>
          {Array(21)
            .fill(0)
            .map((_, index) => (
              <Container
                key={index}
                className="flex w-full flex-row flex-nowrap items-center justify-between gap-3"
                p={0}
              >
                <Skeleton circle animate={false} className="shrink-0" h={28} w={28} />
                <Skeleton animate={false} h={28} />
              </Container>
            ))}
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default AppLayout;
