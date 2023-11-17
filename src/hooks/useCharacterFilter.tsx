import { create } from 'zustand';

interface FilterState {
  filterValue: string;
  setFilterValue: (value: string) => void;
}

const useCharacterFilter = create<FilterState>((set) => ({
  filterValue: '',
  setFilterValue: (value: string) => set({ filterValue: value }),
}));

export { useCharacterFilter };
export type { FilterState };
