import { fireEvent, render, screen } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';

import { CheckCounter } from './CheckCounter';

const Test = ({ max }: { max: number }) => {
  const methods = useForm({ defaultValues: { testNumeric: 1 } });
  return (
    <FormProvider {...methods}>
      <form>
        <CheckCounter CheckComponent={<input type="checkbox" />} max={max} name="testNumeric" />
      </form>
    </FormProvider>
  );
};

describe('CheckCounter', () => {
  it('Should render with the correct number of checkboxes', async () => {
    const count = 3;
    render(<Test max={count} />);
    const checkBoxList = screen.getAllByRole('checkbox');
    expect(checkBoxList.length).toBe(count);
  });

  it('Should update checkboxes appropriately', async () => {
    const count = 5;
    render(<Test max={count} />);

    const checkBoxList = screen.getAllByRole('checkbox') as Element[];
    expect(checkBoxList.length).toBe(count);

    expect(checkBoxList[0]).toBeChecked();

    fireEvent.click(checkBoxList[1]!);
    expect(checkBoxList[1]).toBeChecked();

    fireEvent.click(checkBoxList[4]!);
    expect(checkBoxList[4]).not.toBeChecked();
    expect(checkBoxList[2]).toBeChecked();

    fireEvent.click(checkBoxList[0]!);
    expect(checkBoxList[0]).toBeChecked();
    expect(checkBoxList[2]).not.toBeChecked();
  });
});
