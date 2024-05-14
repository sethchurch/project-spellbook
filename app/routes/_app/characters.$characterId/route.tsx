import { Tab } from '@nextui-org/tabs';
import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { json, Outlet, redirect, useLoaderData, useNavigate, useParams } from '@remix-run/react';
import type { Key } from 'react';

import { TabList } from '@/components/Elements/TabList';
import { TabTitle } from '@/components/Elements/TabTitle';
import { BasicErrorBoundary } from '@/components/Layout/ErrorBoundary';
import { AppConfig } from '@/config/AppConfig';
import { requireAuthSession } from '@/features/auth/utils/session.server';
import { CharacterSheetProvider } from '@/features/characters';
import { CharacterImageEditButton } from '@/features/characters/components/CharacterImageEditButton';
import { getCharacter } from '@/features/characters/utils/characterService.server';

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const session = await requireAuthSession(request);
  const { characterId } = params;
  const { userId } = session;
  if (!characterId) throw redirect('/tavern');
  const character = await getCharacter(userId, characterId);

  return json({ character });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const name = data?.character?.name;
  if (!name) return [];
  return [{ title: `${name} | ${AppConfig.title}` }];
};

const tabList = [
  { key: 'core', title: 'Core' },
  { key: 'inventory', title: 'Inventory' },
  { key: 'bio', title: 'Bio' },
  { key: 'spells', title: 'Spells' },
];
const CharacterPageTab = ({ title }: { title: string }) => {
  return (
    <TabTitle size="lg" styleVariant="alt">
      {title}
    </TabTitle>
  );
};

const CharacterPage = () => {
  const navigate = useNavigate();
  const { characterId } = useParams();
  const { character } = useLoaderData<typeof loader>();

  const onTabChange = (key: Key) => {
    navigate(`/characters/${characterId}/${key}`);
  };

  return (
    <div className="m-1 md:m-6">
      <TabList defaultTab={tabList[0]?.key ?? 'core'} onSelectionChange={onTabChange}>
        {tabList.map((tab: (typeof tabList)[0]) => (
          <Tab key={tab.key} title={<CharacterPageTab title={tab.title} />} />
        ))}
      </TabList>
      <div className="bg-pod-alt rounded-lg">
        <div className="group relative flex h-32 w-full flex-col rounded-t-lg bg-gradient-to-r from-violet-700 to-violet-950 md:h-56">
          {/* TODO: Add Character Banner Image */}
          <div className="absolute left-0 top-0 size-full bg-gradient-to-r from-violet-700 to-violet-950 opacity-0 transition-opacity hover:opacity-30" />
          <CharacterImageEditButton />
        </div>
        <CharacterSheetProvider character={character}>
          <Outlet />
        </CharacterSheetProvider>
      </div>
    </div>
  );
};

export const ErrorBoundary = () => {
  return <BasicErrorBoundary />;
};

export default CharacterPage;
