import { Button, Container, Flex, Group, Text } from '@mantine/core';
import { IconWand } from '@tabler/icons-react';
import Link from 'next/link';

import { AppConfig } from '@/config/AppConfig';

const LandingPage = () => {
  return (
    <Container size="xl" p={10}>
      <Group w="100%" justify="space-between">
        <Flex gap={10}>
          <IconWand />
          <Text>{AppConfig.site_name}</Text>
        </Flex>
        <Link href="/tavern">
          <Button>To The Tavern</Button>
        </Link>
      </Group>
    </Container>
  );
};

export default LandingPage;
