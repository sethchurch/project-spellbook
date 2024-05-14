import { type LoaderFunctionArgs, redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { BasicErrorBoundary } from '@/components/Layout/ErrorBoundary';
import { requireAuthSession } from '@/features/auth/utils/session.server';
import { CoreTab as CharacterSheetCoreTab } from '@/features/characters';
import { getCharacter } from '@/features/characters/utils/characterService.server';

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const session = await requireAuthSession(request);
  const { userId } = session;
  const { characterId } = params;
  if (!characterId) throw redirect('/tavern');
  const coreSheetData = await getCharacter(userId, characterId, {
    include: {
      deathSaves: true,
      skills: true,
      stats: true,
      hitDice: true,
      hitPoints: true,
      features: true,
      attacks: true,
      resources: true,
      proficiencies: true,
      bio: {
        select: {
          personalityTraits: true,
          ideals: true,
          bonds: true,
          flaws: true,
        },
      },
    },
  });

  return { characterId, character: coreSheetData };
};

const CoreTab = () => {
  const { character } = useLoaderData<typeof loader>();
  return <CharacterSheetCoreTab character={character} />;
};

export const ErrorBoundary = () => {
  return <BasicErrorBoundary />;
};

export type CoreTabDefaultValue = Awaited<ReturnType<typeof loader>>['character'];
export default CoreTab;
