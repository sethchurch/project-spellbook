import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { type Character, characterDefaults } from '@/config/CharacterConfig';

interface CharacterState {
  characters: Character[];
  addCharacter: (character: Character | Partial<Character>) => number;
  removeCharacter: (characterId: number) => void;
  updateCharacter: (character: Character, characterId: number) => void;
  importCharacters: (characters: Character[]) => void;
}

const useCharacterStore = create<CharacterState>()(
  persist(
    (set) => ({
      characters: [],
      addCharacter: (character: Character | Partial<Character>) => {
        const newCharacter: Character = { ...characterDefaults, ...character };

        let newCharacterIndex = -1;
        set((state) => {
          newCharacterIndex = state.characters.length;
          return { characters: [...state.characters, newCharacter] };
        });
        return newCharacterIndex;
      },
      removeCharacter: (characterId: number) => {
        return set((state) => ({
          characters: state.characters.filter((_, i) => i !== characterId),
        }));
      },
      updateCharacter: (character: Character, characterId: number) => {
        return set((state) => ({
          characters: state.characters.map((x, i) => (i === characterId ? character : x)),
        }));
      },
      importCharacters: (characters: Character[]) => {
        return set((state) => ({ characters: [...state.characters, ...characters] }));
      },
    }),
    { name: 'characterState' },
  ),
);

export { useCharacterStore };
export type { CharacterState };
