import { type ErrorResponse, isRouteErrorResponse, useParams, useRouteError } from '@remix-run/react';
import { captureRemixErrorBoundaryError } from '@sentry/remix';

import { getErrorMessage } from '@/utils/misc';

type StatusHandler = (info: { error: ErrorResponse; params: Record<string, string | undefined> }) => JSX.Element | null;

interface BasicErrorBoundaryProps {
  defaultStatusHandler?: StatusHandler;
  statusHandlers?: Record<number, StatusHandler>;
  unexpectedErrorHandler?: (error: unknown) => JSX.Element | null;
}

export function BasicErrorBoundary({
  defaultStatusHandler = ({ error }) => (
    <p>
      {error.status} {error.data}
    </p>
  ),
  statusHandlers,
  unexpectedErrorHandler = (error) => <p>{getErrorMessage(error)}</p>,
}: BasicErrorBoundaryProps) {
  const error = useRouteError();
  captureRemixErrorBoundaryError(error);
  const params = useParams();

  if (typeof document !== 'undefined') {
    console.error(error);
  }

  return (
    <div className="container flex items-center justify-center p-20">
      {isRouteErrorResponse(error)
        ? (statusHandlers?.[error.status] ?? defaultStatusHandler)({
            error,
            params,
          })
        : unexpectedErrorHandler(error)}
    </div>
  );
}
