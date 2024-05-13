import type { LoaderFunctionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/react';

import { BasicErrorBoundary } from '@/components/Layout/ErrorBoundary';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { characterId } = params;
  return redirect(`/characters/${characterId}/core`);
};

export const ErrorBoundary = () => {
  return <BasicErrorBoundary />;
};
