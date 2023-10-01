import type { Dispatch } from 'react';
import { createContext, useMemo, useReducer } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import type { character } from '@/config/dummyData';
import { character as defaultCharacter } from '@/config/dummyData';

interface CharacterSheetProviderProps {
  children?: React.ReactNode;
  character?: typeof character;
  onSubmit?: () => void;
}
interface CharacterSheetAction {
  type: 'UPDATE_CHARACTER';
  payload: any;
}

const CharacterSheetContext = createContext<{
  character: typeof defaultCharacter;
  dispatch: Dispatch<CharacterSheetAction>;
}>({
  character: defaultCharacter,
  dispatch: () => null,
});

const useCharacterSheet = () => {
  const context = createContext(CharacterSheetContext);

  if (context === undefined) {
    throw new Error('useCharacterSheet must be used within a CharacterSheetProvider');
  }

  return context;
};

const characterReducer = (state: typeof defaultCharacter, action: CharacterSheetAction) => {
  switch (action.type) {
    case 'UPDATE_CHARACTER':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const CharacterSheetProvider = ({ children, character, onSubmit }: CharacterSheetProviderProps) => {
  const [characterValue, dispatch] = useReducer(characterReducer, character || defaultCharacter);
  const value = useMemo(() => ({ character: characterValue, dispatch }), [characterValue]);
  const methods = useForm({ defaultValues: characterValue });
  return (
    <CharacterSheetContext.Provider value={value}>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>{children}</form>
      </FormProvider>
    </CharacterSheetContext.Provider>
  );
};

export { CharacterSheetProvider, useCharacterSheet };
