'use client';

import { useCharacterFilter } from '@/hooks/useCharacterFilter';

import { Input, type InputProps } from './Input';

const CharacterFilterInput = ({ ...props }: InputProps) => {
  const [filterValue, setFilterValue] = useCharacterFilter((state) => [state.filterValue, state.setFilterValue]);

  const setFilterOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  const clearFilter = () => {
    setFilterValue('');
  };

  return (
    <Input
      {...props}
      isClearable
      placeholder="Find characters..."
      styleVariant="inset"
      value={filterValue}
      variant="faded"
      onChange={setFilterOnChange}
      onClear={clearFilter}
    />
  );
};

export { CharacterFilterInput };
