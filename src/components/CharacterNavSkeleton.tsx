interface CharacterNavSkeletonProps {
  count?: number;
}

const CharacterNavSkeleton = ({ count = 15 }: CharacterNavSkeletonProps) => {
  return (
    <div className="flex flex-col gap-3">
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="flex w-full max-w-[300px] items-center gap-3">
            <div className="aspect-square h-7 rounded-full bg-zinc-700" />
            <div className="h-7 w-full rounded bg-zinc-700" />
          </div>
        ))}
    </div>
  );
};

export { CharacterNavSkeleton };
