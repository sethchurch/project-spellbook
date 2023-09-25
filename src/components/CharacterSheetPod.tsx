interface CharacterSheetPodProps {
  children: React.ReactNode;
  variant?: 'alt' | 'default' | 'transparent';
  square?: boolean;
  className?: string;
}

const variants = {
  bg: {
    alt: 'bg-zinc-800',
    default: 'bg-zinc-950',
    transparent: 'transparent',
  },
};

const CharacterSheetPod = ({ children, variant, className, square }: CharacterSheetPodProps) => {
  const classes = `${className || ''} ${variants.bg[variant ?? 'default']} rounded-lg p-10 ${
    square ? 'aspect-square' : ''
  }`;
  return <div className={classes}>{children}</div>;
};

export { CharacterSheetPod };
