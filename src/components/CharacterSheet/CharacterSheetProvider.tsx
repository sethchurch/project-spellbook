'use client';

import { cloneDeep, debounce, isEqual } from 'lodash';
import { useEffect, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { AppConfig } from '@/config/AppConfig';
import type { Character } from '@/config/CharacterConfig';
import { useCharacterStore } from '@/hooks/useCharacterStore';

interface CharacterSheetProviderProps {
  children?: React.ReactNode;
  characterId: number;
}

const CharacterSheetProvider = ({ children, characterId }: CharacterSheetProviderProps) => {
  const { character, updateCharacter } = useCharacterStore((state) => ({
    character: state.characters[characterId],
    updateCharacter: state.updateCharacter,
  }));

  const formMethods = useForm({ defaultValues: character });
  const previousCharacterRef = useRef<Character | null>(character ?? null);
  const currentCharacterData = formMethods.watch();
  const debouncedUpdateCharacter = useRef(debounce(updateCharacter, 1000)).current;

  useEffect(() => {
    document.title = `${character?.name ?? 'Character'} | ${AppConfig.title}`;

    if (character && !isEqual(previousCharacterRef.current, currentCharacterData)) {
      debouncedUpdateCharacter(currentCharacterData, characterId);
      previousCharacterRef.current = cloneDeep(currentCharacterData);
    }

    return () => {
      debouncedUpdateCharacter.cancel();
      document.title = AppConfig.title;
    };
  }, [character, characterId, currentCharacterData, debouncedUpdateCharacter]);

  return <FormProvider {...formMethods}>{children}</FormProvider>;
};

export { CharacterSheetProvider };
