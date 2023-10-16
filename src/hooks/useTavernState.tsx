import { create } from 'zustand';

interface TavernState {
  isEditing: boolean;
  toggleEditMode: () => void;
}

const useTavernState = create<TavernState>((set) => ({
  isEditing: false,
  toggleEditMode: () => set((state) => ({ isEditing: !state.isEditing })),
}));

export { useTavernState };
export type { TavernState };
