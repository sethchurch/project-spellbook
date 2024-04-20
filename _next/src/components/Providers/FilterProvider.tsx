import { createContext, type PropsWithChildren, useContext, useMemo } from 'react';

interface FilterContextProps {
  filterKeyList?: string[];
  filterValue?: string;
}

const FilterContext = createContext<FilterContextProps>({});

type Indexable = { [key: string]: any };
type Visible<T> = T & { visible: boolean };

const useFilter = <T extends Indexable>(array: T[]): Visible<T>[] => {
  const { filterKeyList, filterValue } = useContext(FilterContext);

  if (!filterKeyList || !filterValue) return array.map((item) => ({ ...item, visible: true }));

  return array.map((item) => {
    const visible = filterKeyList.some((key) => {
      const keyValue = item[key];
      if (!keyValue) return false;
      return keyValue.toLowerCase().includes(filterValue.toLowerCase());
    });
    return { ...item, visible };
  });
};

interface FilterProviderProps extends PropsWithChildren {
  filterKeyList?: string[];
  filterValue?: string;
}

const FilterProvider = ({ children, filterKeyList, filterValue }: FilterProviderProps) => {
  const value = useMemo(() => {
    return { filterKeyList, filterValue };
  }, [filterKeyList, filterValue]);

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
};

export { FilterProvider, useFilter };
