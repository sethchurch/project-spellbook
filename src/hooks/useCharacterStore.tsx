import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { Character } from '@/config/CharacterConfig';

interface CharacterState {
  characters: Character[];
  addCharacter: (character: Character) => void;
  updateCharacter: (character: Character, characterId: number) => void;
}

const useCharacterStore = create<CharacterState>()(
  persist(
    (set) => ({
      characters: [],
      addCharacter: (character: Character) => set((state) => ({ characters: [...state.characters, character] })),
      updateCharacter: (character: Character, characterId: number) => {
        return set((state) => ({
          characters: state.characters.map((x, i) => (i === characterId ? character : x)),
        }));
      },
    }),
    { name: 'characterState' },
  ),
);

export { useCharacterStore };
export type { CharacterState };
