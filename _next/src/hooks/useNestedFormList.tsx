import { useFormContext } from 'react-hook-form';

interface UseNestedFormListProps {
  fieldName: string;
}

const useNestedFormList = <T,>({ fieldName }: UseNestedFormListProps) => {
  const { getValues, setValue } = useFormContext();
  const dataList: T[][] = getValues(fieldName) ?? [];

  const add = (newData: T, index: number) => {
    setValue(`${fieldName}[${index}]`, [...dataList, newData]);
  };

  const remove = (index: number, itemIndex: number) => {
    setValue(`${fieldName}[${index}]`, dataList.slice(0, itemIndex).concat(dataList.slice(itemIndex + 1)));
  };

  return { dataList, add, remove };
};

export { useNestedFormList };
