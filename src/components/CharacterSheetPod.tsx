import { Box } from '@mantine/core';

interface CharacterSheetPodProps {
  children: React.ReactNode;
  variant?: 'alt' | 'default' | 'transparent';
  square?: boolean;
  className?: string;
}

const variants = {
  bg: {
    alt: 'dark.7',
    default: 'black.8',
    transparent: 'transparent',
  },
};

const CharacterSheetPod = ({ children, variant, className, square }: CharacterSheetPodProps) => {
  const classes = `${className || ''} rounded-lg ${square ? 'aspect-square' : ''}`;
  return (
    <Box bg={variants.bg[variant ?? 'default']} className={classes} p="md">
      {children}
    </Box>
  );
};

export { CharacterSheetPod };
