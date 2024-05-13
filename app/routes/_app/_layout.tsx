import type { LoaderFunctionArgs } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';

import { AppShell } from '@/components/Layout/AppShell';
import { MaxWidthWrapper } from '@/components/Layout/MaxWidthWrapper';
import { Navbar } from '@/components/Layout/Navbar';
import { Sidenav } from '@/components/Layout/Sidenav';
import { getAuthSession } from '@/features/auth/utils/session.server';
import { getPreviewCharactersByUserId } from '@/features/characters/utils/characterService.server';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await getAuthSession(request);
  if (!session) return null;

  const characterList = await getPreviewCharactersByUserId(session.userId);

  return { session, characterList };
};

const AppLayout = () => {
  const { characterList } = useLoaderData<typeof loader>();
  return (
    <AppShell>
      <Navbar />
      <main className="flex">
        <Sidenav characters={characterList} />
        <MaxWidthWrapper>
          <Outlet />
        </MaxWidthWrapper>
      </main>
    </AppShell>
  );
};

export default AppLayout;
