interface StatDisplayProps {
  stat: number;
}

const StatDisplay = ({ stat }: StatDisplayProps) => {
  return (
    <div className="flex aspect-square items-center rounded-lg text-center bg-zinc-800 p-8">
      <p className="text-3xl m-auto">{stat}</p>
    </div>
  );
};

export { StatDisplay };
