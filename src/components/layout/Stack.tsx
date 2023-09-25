interface StackProps {
  children: React.ReactNode;
}

const Stack = ({ children }: StackProps) => {
  return <div className="flex flex-col justify-between gap-3">{children}</div>;
};

export { Stack };
