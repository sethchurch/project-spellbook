'use client';

import {
  AppShell,
  Burger,
  Button,
  Container,
  Grid,
  Group,
  Input,
  Skeleton,
  Stack,
} from '@mantine/core';
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
      layout="alt"
      header={{ height: 60 }}
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
              <Burger
                opened={mobileOpened}
                onClick={toggleMobile}
                hiddenFrom="sm"
                size="sm"
              />
              <Burger
                opened={desktopOpened}
                onClick={toggleDesktop}
                visibleFrom="sm"
                size="sm"
              />
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
          {Array(15)
            .fill(0)
            .map((_, index) => {
              return (
                <Container
                  className="flex w-full flex-row flex-nowrap items-center justify-between gap-3"
                  p={0}
                  key={index}
                >
                  <Skeleton
                    className="shrink-0"
                    circle
                    w={28}
                    h={28}
                    animate={false}
                  />
                  <Skeleton h={28} animate={false} />
                </Container>
              );
            })}
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default AppLayout;
