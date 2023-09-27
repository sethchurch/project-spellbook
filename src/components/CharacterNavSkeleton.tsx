interface CharacterNavSkeletonProps {
  count?: number;
}

const CharacterNavSkeleton = ({ count = 15 }: CharacterNavSkeletonProps) => {
  return (
    <div className="flex-stack">
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="flex w-full max-w-[300px] items-center gap-3">
            <div className="aspect-square h-7 rounded-full bg-default-400 dark:bg-zinc-700" />
            <div className="h-7 w-full rounded bg-default-400 dark:bg-zinc-700" />
          </div>
        ))}
    </div>
  );
};

export { CharacterNavSkeleton };
