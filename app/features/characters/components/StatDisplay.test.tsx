import { render, screen } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';

import { StatDisplay } from './StatDisplay';

const StatDisplayWithProvider = ({ stat }: { stat: number }) => {
  const methods = useForm({
    defaultValues: {
      stats: {
        str: stat,
      },
    },
  });
  return (
    <FormProvider {...methods}>
      <form>
        <StatDisplay statName="Str" />
      </form>
    </FormProvider>
  );
};

describe('StatDisplay (component)', () => {
  it('Displays a given stat', async () => {
    render(<StatDisplayWithProvider stat={10} />);
    const statInput = screen.getByRole('textbox');
    expect(statInput).toHaveValue('10');
  });

  it('Displays positive stat bonus', async () => {
    render(<StatDisplayWithProvider stat={15} />);
    expect(screen.getByText('+2')).toBeInTheDocument();
  });

  it('Displays negative stat bonus', async () => {
    render(<StatDisplayWithProvider stat={8} />);
    expect(screen.getByText('-1')).toBeInTheDocument();
  });

  it('Displays zero stat bonus', async () => {
    render(<StatDisplayWithProvider stat={10} />);
    expect(screen.getByText('+0')).toBeInTheDocument();
  });

  it('Renders both stat and bonus', async () => {
    render(<StatDisplayWithProvider stat={7} />);
    const statInput = screen.getByRole('textbox');
    expect(statInput).toHaveValue('7');
    expect(screen.getByText('-2')).toBeInTheDocument();
  });
});
