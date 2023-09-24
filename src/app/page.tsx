import { Button, Container, Stack, Text, Title } from '@mantine/core';
import { IconWand } from '@tabler/icons-react';

import { Link } from '@/components/Link';
import { AppConfig } from '@/config/AppConfig';

const LandingPage = () => {
  return (
    <Container p={20} size="xl">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 align-middle">
          <IconWand />
          <Text>{AppConfig.site_name}</Text>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/tavern">
            <Button>To The Tavern</Button>
          </Link>
        </div>
      </div>

      <Stack align="flex-start" gap={24} h={350} justify="center">
        <Title order={1} size="3.5em">
          Welcome to {AppConfig.site_name}
        </Title>
        <Link href="/tavern">
          <Button size="lg">To The Tavern</Button>
        </Link>
      </Stack>
    </Container>
  );
};

export default LandingPage;
