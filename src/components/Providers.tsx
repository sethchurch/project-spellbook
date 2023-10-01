import { QueryProvider } from '@/providers/QueryProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';

interface ProvidersProps {
  children?: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider>
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  );
};

export { Providers };
