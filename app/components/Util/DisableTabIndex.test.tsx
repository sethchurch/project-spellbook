import { render, screen } from 'tests/utils';

import { DisableTabIndex } from './DisableTabIndex';

describe('DisableTabIndex', () => {
  it('should disable all focusable elements in the component', async () => {
    const ComponentWithInput = () => {
      return (
        <DisableTabIndex>
          <input data-testid="testInput" type="text" />
        </DisableTabIndex>
      );
    };

    render(<ComponentWithInput />);
    const input = screen.getByTestId('testInput');

    expect(input).toHaveAttribute('tabindex', '-1');
    expect(input).toHaveAttribute('aria-hidden', 'true');
    expect(input).toHaveAttribute('disabled', 'true');
  });

  it('should not disable elements that are not focusable', async () => {
    const ComponentWithNonFocusable = () => {
      return (
        <DisableTabIndex>
          <div data-testid="testDiv">Test</div>
        </DisableTabIndex>
      );
    };

    render(<ComponentWithNonFocusable />);
    const div = screen.getByTestId('testDiv');

    expect(div).not.toHaveAttribute('tabindex');
    expect(div).not.toHaveAttribute('aria-hidden');
    expect(div).not.toHaveAttribute('disabled');
  });
});
