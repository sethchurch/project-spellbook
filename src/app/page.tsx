import { Button, Container, Stack, Text, Title } from '@mantine/core';
import { IconWand } from '@tabler/icons-react';

import UnstyledLink from '@/components/UnstyledLink';
import { AppConfig } from '@/config/AppConfig';

const LandingPage = () => {
  return (
    <Container size="xl" p={20}>
      <div className="flex items-center justify-between">
        <div className="flex gap-5 align-middle">
          <IconWand />
          <Text>{AppConfig.site_name}</Text>
        </div>
        <div className="flex items-center gap-10">
          <UnstyledLink href="/">Home</UnstyledLink>
          <UnstyledLink href="/about">About</UnstyledLink>
          <UnstyledLink href="/tavern">
            <Button>To The Tavern</Button>
          </UnstyledLink>
        </div>
      </div>

      <Stack align="flex-start" justify="center" h={350} gap={32}>
        <Title order={1}>Welcome to {AppConfig.site_name}</Title>
        <Button>To The Tavern</Button>
      </Stack>
    </Container>
  );
};

export default LandingPage;
