'use client';

import { useEffect, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import type { Character } from '@/config/CharacterConfig';
import { useCharacterStore } from '@/hooks/useCharacterStore';

interface CharacterSheetProviderProps {
  children?: React.ReactNode;
  onSubmit?: () => void;
}

const CharacterSheetProvider = ({ children, onSubmit }: CharacterSheetProviderProps) => {
  const [character, updateCharacter] = useCharacterStore((state) => [state.characters[0]!, state.updateCharacter]);
  const methods = useForm({ defaultValues: character });
  const { watch } = methods;

  const previousCharacterRef = useRef<Character>(character);
  const currentCharacterData = watch();

  useEffect(() => {
    if (JSON.stringify(previousCharacterRef.current) !== JSON.stringify(currentCharacterData)) {
      updateCharacter(currentCharacterData);
      previousCharacterRef.current = JSON.parse(JSON.stringify(currentCharacterData));
    }
  }, [currentCharacterData, updateCharacter]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </FormProvider>
  );
};

export { CharacterSheetProvider };
