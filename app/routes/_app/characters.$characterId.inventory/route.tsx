import type { LoaderFunctionArgs } from '@remix-run/node';

import { BasicErrorBoundary } from '@/components/Layout/ErrorBoundary';
import { InventoryTab as CharacterSheetInventoryTab } from '@/features/characters';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { characterId } = params;
  return { characterId };
};

const InventoryTab = () => {
  return <CharacterSheetInventoryTab />;
};

export const ErrorBoundary = () => {
  return <BasicErrorBoundary />;
};

export default InventoryTab;
