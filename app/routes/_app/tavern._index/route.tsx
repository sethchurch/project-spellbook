import type { LoaderFunctionArgs } from '@remix-run/node';

import { getAuthSession } from '@/features/auth/utils/session.server';
import { CharacterList } from '@/features/characters';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const data = await getAuthSession(request);
  return {
    data,
  };
};

const Tavern = () => {
  return <CharacterList />;
};

export default Tavern;
