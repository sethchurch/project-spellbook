import type { PropsWithChildren } from 'react';

const Backline = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid w-full grid-cols-[1fr_max-content_1fr] items-center gap-3 px-3">
      <div className="h-0.5 w-full bg-stone-200 dark:bg-zinc-700" />
      {children}
      <div className="h-0.5 w-full bg-stone-200 dark:bg-zinc-700" />
    </div>
  );
};

export { Backline };
