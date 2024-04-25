import { Input } from '@nextui-org/input';
import { FormProvider, useForm } from 'react-hook-form';
import { act, render } from 'tests/utils';

import { CheckCounter } from './CheckCounter';

const Test = ({ max, initalValue }: { max: number; initalValue?: number }) => {
  const methods = useForm({ defaultValues: { testNumeric: initalValue ?? 0 } });
  return (
    <FormProvider {...methods}>
      <form>
        <CheckCounter CheckComponent={<Input type="checkbox" />} max={max} name="testNumeric" />
      </form>
    </FormProvider>
  );
};

describe('CheckCounter', () => {
  it('Should render with the correct number of checkboxes', async () => {
    const count = 3;
    const { getAllByRole } = render(<Test max={count} />);
    const checkBoxList = getAllByRole('checkbox');
    expect(checkBoxList.length).toBe(count);
  });

  it('Should update checkboxes appropriately', async () => {
    const count = 5;
    const { user, getAllByRole } = render(<Test initalValue={1} max={count} />);

    const checkBoxList = getAllByRole('checkbox') as Element[];
    expect(checkBoxList.length).toBe(count);

    expect(checkBoxList[0]).toBeChecked();

    await act(() => user.click(checkBoxList[1]!));
    expect(checkBoxList[1]).toBeChecked();

    await act(() => user.click(checkBoxList[4]!));
    expect(checkBoxList[4]).not.toBeChecked();
    expect(checkBoxList[2]).toBeChecked();

    await act(() => user.click(checkBoxList[0]!));
    expect(checkBoxList[0]).toBeChecked();
    expect(checkBoxList[2]).not.toBeChecked();
  });
});
