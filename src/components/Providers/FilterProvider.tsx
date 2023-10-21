import { createContext, type PropsWithChildren, useMemo, useState } from 'react';

const FilterContext = createContext({});

interface FilterProviderProps extends PropsWithChildren {
  data: any[];
}

const FilterProvider = ({ children, data }: FilterProviderProps) => {
  const [filterValue, setFilterValue] = useState('');

  const filterData = useMemo(() => {
    if (data.length === 0) return [];

    return data.filter((item) => {
      const name = item.name.toLowerCase();
      const filter = filterValue.toLowerCase();

      return name.includes(filter);
    });
  }, [data, filterValue]);

  const value = useMemo(() => ({ filterValue, setFilterValue, data: filterData }), [filterData, filterValue]);

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
};

export { FilterProvider };
