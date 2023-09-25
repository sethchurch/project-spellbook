import { Paper } from '@mantine/core';

interface StatDisplayProps {
  stat: number;
}

const StatDisplay = ({ stat }: StatDisplayProps) => {
  return (
    <Paper bg="dark.7" className="flex aspect-square items-center rounded-lg text-center" p="lg">
      <p className="text-3xl">{stat}</p>
    </Paper>
  );
};

export { StatDisplay };
