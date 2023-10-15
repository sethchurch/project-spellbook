import { Button } from '@nextui-org/button';

import { Icon } from '@/components/Elements/Icon';
import { Input } from '@/components/Elements/Input';
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
            <Input isClearable styleVariant="inset" variant="faded" />
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
