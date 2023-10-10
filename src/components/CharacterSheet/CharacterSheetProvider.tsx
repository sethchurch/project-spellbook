import { useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import type { Character } from '@/config/CharacterConfig';
import { useCharacterStore } from '@/hooks/useCharacterStore';

interface CharacterSheetProviderProps {
  children?: React.ReactNode;
  onSubmit?: () => void;
}

const CharacterSheetProvider = ({ children, onSubmit }: CharacterSheetProviderProps) => {
  const character = useCharacterStore<Character>((state) => state.characters[0]!);
  const methods = useForm({ defaultValues: character });
  const { watch } = methods;

  const previousCharacterRef = useRef<Character>(character);
  const currentCharacterData = watch();

  const updateCharacter = useCharacterStore((state) => state.updateCharacter);

  if (JSON.stringify(previousCharacterRef.current) !== JSON.stringify(currentCharacterData)) {
    updateCharacter(currentCharacterData);
    previousCharacterRef.current = JSON.parse(JSON.stringify(currentCharacterData));
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </FormProvider>
  );
};

export { CharacterSheetProvider };
