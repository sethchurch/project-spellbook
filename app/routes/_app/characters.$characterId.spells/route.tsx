import type { LoaderFunctionArgs } from '@remix-run/node';

import { BasicErrorBoundary } from '@/components/Layout/ErrorBoundary';
import { SpellsTab as CharacterSheetSpellsTab } from '@/features/characters';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { characterId } = params;
  return { characterId };
};

const SpellsTab = () => {
  return <CharacterSheetSpellsTab />;
};

export const ErrorBoundary = () => {
  return <BasicErrorBoundary />;
};

export default SpellsTab;
