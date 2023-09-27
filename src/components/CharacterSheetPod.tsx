interface CharacterSheetPodProps {
  children: React.ReactNode;
  variant?: 'alt' | 'default' | 'transparent';
  square?: boolean;
  className?: string;
}

const variants = {
  bg: {
    alt: 'bg-zinc-900',
    default: 'bg-zinc-950',
    transparent: 'transparent',
  },
};

const CharacterSheetPod = ({ children, variant, className, square }: CharacterSheetPodProps) => {
  const classes = `${className || ''} ${variants.bg[variant ?? 'default']} rounded-lg p-3 text-center ${
    square ? 'aspect-square' : ''
  }`;
  return <div className={classes}>{children}</div>;
};

export { CharacterSheetPod };
