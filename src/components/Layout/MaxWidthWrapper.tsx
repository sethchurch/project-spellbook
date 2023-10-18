import { cn } from '@/utils/cn';

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
  return <div className={cn('mx-auto w-full px-3 md:px-5 max-w-[1750px]', className)}>{children}</div>;
};

export { MaxWidthWrapper };
