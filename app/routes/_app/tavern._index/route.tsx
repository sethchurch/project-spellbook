import type { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { requireAuthSession } from '@/features/auth/utils/session.server';
import { CharacterList } from '@/features/characters';
import { getPreviewCharactersByUserId } from '@/features/characters/utils/characterService.server';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await requireAuthSession(request);
  if (!session) return null;

  const characterList = await getPreviewCharactersByUserId(session.userId);
  return { session, characterList };
};

const Tavern = () => {
  const { characterList } = useLoaderData<typeof loader>();
  return <CharacterList characters={characterList} />;
};

export default Tavern;
