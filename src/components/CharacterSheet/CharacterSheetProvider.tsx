import { useEffect, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import type { Character } from '@/config/CharacterConfig';
import { character as defaultCharacter } from '@/config/dummyData';
import { debounce } from '@/utils/debounce';

interface CharacterSheetProviderProps {
  children?: React.ReactNode;
  character?: Character;
  onSubmit?: () => void;
}

const characterKey = 'characterData';

const getCharacter = (defaultValue: Character) => {
  const character = localStorage.getItem(characterKey);
  return character ? JSON.parse(character) : defaultValue;
};

const CharacterSheetProvider = ({ children, character, onSubmit }: CharacterSheetProviderProps) => {
  const methods = useForm({ defaultValues: getCharacter(character || defaultCharacter) });
  const { getValues, watch } = methods;
  const charcterData = watch();

  const saveToLocalStorage = useRef(
    debounce((data: Character) => {
      localStorage.setItem(characterKey, JSON.stringify(data));
    }, 100),
  ).current;

  useEffect(() => {
    saveToLocalStorage(charcterData);
  }, [charcterData, getValues, saveToLocalStorage, watch]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </FormProvider>
  );
};

export { CharacterSheetProvider };
