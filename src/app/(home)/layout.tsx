import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';

import { Icon } from '@/components/Elements/Icon';
import { AppShell } from '@/components/Layout/AppShell';
import { Navbar } from '@/components/Layout/Navbar';
import { Sidenav } from '@/components/Layout/Sidenav';

import { CharacterNav } from './CharacterNav';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <AppShell>
      <Navbar />
      <main className="flex">
        <Sidenav>
          <div className="flex-stack">
            <Input
              isClearable
              classNames={{
                inputWrapper: [
                  'bg-zinc-100',
                  'dark:bg-zinc-700',
                  'hover:bg-default-100/70',
                  'dark:hover:bg-default/70',
                  'group-data-[focus=true]:bg-zinc-100/100',
                  'dark:group-data-[focus=true]:bg-zinc-900/70',
                  '!cursor-text',
                ],
              }}
              variant="faded"
            />
            <Button color="primary">
              <Icon icon="plus" />
            </Button>
            <CharacterNav />
          </div>
        </Sidenav>
        <div className="grow">{children}</div>
      </main>
    </AppShell>
  );
};

export default AppLayout;
