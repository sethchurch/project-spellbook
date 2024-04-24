import { useFetcher } from '@remix-run/react';

import type { ButtonProps } from '@/components/Elements/Button';
import { Button } from '@/components/Elements/Button';
import { Icon } from '@/components/Elements/Icon';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/utils/cn';

interface ToggleThemeButtonProps extends ButtonProps {
  className?: string;
}

const ToggleThemeButton = ({ ...props }: ToggleThemeButtonProps) => {
  const theme = useTheme();
  const fetcher = useFetcher();

  const nextTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <fetcher.Form action="/resources/theme" method="post">
      <input name="theme" type="hidden" value={nextTheme} />
      <Button isIconOnly className={cn('justify-self-end', props.className)} type="submit">
        <Icon icon={theme === 'light' ? 'moon' : 'sun'} />
      </Button>
    </fetcher.Form>
  );
};

export { ToggleThemeButton };
