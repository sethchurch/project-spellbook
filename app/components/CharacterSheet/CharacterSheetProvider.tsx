'use client';

import cloneDeep from 'lodash/cloneDeep';
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';
import { useEffect, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { AppConfig } from '@/config/AppConfig';
import type { Character } from '@/config/CharacterConfig';
import { useCharacterStore } from '@/hooks/useCharacterStore';

interface CharacterSheetProviderProps {
  children?: React.ReactNode;
  characterId?: number;
  characterData?: Character;
  isFacade?: boolean;
}

const CharacterSheetProvider = ({
  children,
  characterData,
  characterId = -1,
  isFacade,
}: CharacterSheetProviderProps) => {
  if (characterId === -1 && !characterData) {
    throw new Error('CharacterSheetProvider requires a characterId or characterData prop');
  }

  const { character, updateCharacter } = useCharacterStore((state) => ({
    character: characterData ?? state.characters[characterId],
    updateCharacter: state.updateCharacter,
  }));

  const formMethods = useForm({ defaultValues: character });
  const previousCharacterRef = useRef<Character | null>(null);
  const currentCharacterData = formMethods.watch();
  const debouncedUpdateCharacter = useRef(debounce(updateCharacter, 1000)).current;

  useEffect(() => {
    if (!isFacade) {
      document.title = `${character?.name ?? 'Character'} | ${AppConfig.title}`;

      if (character && !isEqual(previousCharacterRef.current, currentCharacterData)) {
        debouncedUpdateCharacter(currentCharacterData, characterId);
        previousCharacterRef.current = cloneDeep(currentCharacterData);
        formMethods.reset(currentCharacterData);
      }
    }
    return () => {
      document.title = AppConfig.title;
    };
  }, [character, characterId, currentCharacterData, debouncedUpdateCharacter, formMethods, isFacade]);

  return <FormProvider {...formMethods}>{children}</FormProvider>;
};

export { CharacterSheetProvider };
