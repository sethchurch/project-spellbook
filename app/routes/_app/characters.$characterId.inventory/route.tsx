import type { LoaderFunctionArgs } from '@remix-run/node';

import { BasicErrorBoundary } from '@/components/Layout/ErrorBoundary';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { characterId } = params;
  return { characterId };
};

const CoreTab = () => {
  return <h1>CoreTab</h1>;
};

export const ErrorBoundary = () => {
  return <BasicErrorBoundary />;
};

export default CoreTab;
