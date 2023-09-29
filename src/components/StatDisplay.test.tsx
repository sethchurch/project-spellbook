import { render, screen } from '@testing-library/react';

import { StatDisplay } from '@/components/StatDisplay';

describe('StatDisplay (component)', () => {
  it('Displays a given stat', async () => {
    render(<StatDisplay stat={10} />);
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('Displays positive stat bonus', async () => {
    render(<StatDisplay stat={15} />);
    expect(screen.getByText('+2')).toBeInTheDocument();
  });

  it('Displays negative stat bonus', async () => {
    render(<StatDisplay stat={8} />);
    expect(screen.getByText('-1')).toBeInTheDocument();
  });

  it('Displays zero stat bonus', async () => {
    render(<StatDisplay stat={10} />);
    expect(screen.getByText('+0')).toBeInTheDocument();
  });
});
