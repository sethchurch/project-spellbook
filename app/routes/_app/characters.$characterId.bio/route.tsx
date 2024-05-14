import type { LoaderFunctionArgs } from '@remix-run/node';

import { BasicErrorBoundary } from '@/components/Layout/ErrorBoundary';
import { BioTab as CharacterSheetBioTab } from '@/features/characters';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { characterId } = params;
  return { characterId };
};

const BioTab = () => {
  return <CharacterSheetBioTab />;
};

export const ErrorBoundary = () => {
  return <BasicErrorBoundary />;
};

export default BioTab;
