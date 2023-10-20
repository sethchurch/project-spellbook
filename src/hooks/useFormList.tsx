import { useFormContext } from 'react-hook-form';

interface AccordionListProps {
  fieldName: string;
}

const useFormList = <T,>({ fieldName }: AccordionListProps) => {
  const { getValues, setValue } = useFormContext();
  const dataList: T[] = getValues(fieldName) ?? [];

  const add = (newData: T) => {
    setValue(fieldName, [...dataList, newData]);
  };

  const remove = (index: number) => {
    setValue(fieldName, dataList.slice(0, index).concat(dataList.slice(index + 1)));
  };

  return { dataList, add, remove };
};

export { useFormList };
