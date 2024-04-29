import type { RenderResult } from '@testing-library/react';
import { render as renderComponent } from '@testing-library/react';
import type { UserEvent } from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import type { ReactElement } from 'react';

type RenderOptions = Parameters<typeof renderComponent>[1];

export * from '@testing-library/react';

export const render = (ui: ReactElement, options?: RenderOptions): RenderResult & { user: UserEvent } => {
  return {
    ...renderComponent(ui, options),
    user: userEvent.setup(),
  };
};

