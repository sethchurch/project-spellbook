import { Box } from '@mantine/core';

interface CharacterSheetPodProps {
  children: React.ReactNode;
}

const CharacterSheetPod = ({ children }: CharacterSheetPodProps) => {
  return (
    <Box bg="dark.9" className="rounded" p={16}>
      {children}
    </Box>
  );
};

export { CharacterSheetPod };
