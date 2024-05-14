import type { LoaderFunctionArgs } from '@remix-run/node';

import { BasicErrorBoundary } from '@/components/Layout/ErrorBoundary';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { characterId } = params;
  return { characterId };
};

const SpellsTab = () => {
  return <h1>SpellsTab</h1>;
};

export const ErrorBoundary = () => {
  return <BasicErrorBoundary />;
};

export default SpellsTab;
