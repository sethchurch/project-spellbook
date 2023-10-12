'use client';

import { cloneDeep, isEqual } from 'lodash';
import { useEffect, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import type { Character } from '@/config/CharacterConfig';
import { useCharacterStore } from '@/hooks/useCharacterStore';

interface CharacterSheetProviderProps {
  children?: React.ReactNode;
  characterIndex: number;
}

const CharacterSheetProvider = ({ children, characterIndex }: CharacterSheetProviderProps) => {
  const [character, updateCharacter] = useCharacterStore((state) => [
    state.characters[characterIndex],
    state.updateCharacter,
  ]);
  const formMethods = useForm({ defaultValues: character });

  const previousCharacterRef = useRef<Character | null>(character ?? null);
  const currentCharacterData = formMethods.watch();

  useEffect(() => {
    if (!character) return;
    if (!isEqual(previousCharacterRef.current, currentCharacterData)) {
      updateCharacter(currentCharacterData, characterIndex);
      previousCharacterRef.current = cloneDeep(currentCharacterData);
    }
  }, [character, characterIndex, currentCharacterData, updateCharacter]);

  return <FormProvider {...formMethods}>{children}</FormProvider>;
};

export { CharacterSheetProvider };
