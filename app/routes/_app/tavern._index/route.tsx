import type { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { requireAuthSession } from '@/features/auth/utils/session.server';
import { CharacterList } from '@/features/characters';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const data = await requireAuthSession(request);
  return {
    data,
  };
};

const Tavern = () => {
  const data = useLoaderData<typeof loader>();

  console.log(data);
  return <CharacterList />;
};

export default Tavern;
