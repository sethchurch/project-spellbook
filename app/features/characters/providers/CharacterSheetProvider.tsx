import type { Character } from '@prisma/client';
import { FormProvider, useForm } from 'react-hook-form';

interface CharacterSheetProviderProps {
  children?: React.ReactNode;
  character: Character;
  isFacade?: boolean;
}

const CharacterSheetProvider = ({ children, character }: CharacterSheetProviderProps) => {
  const formMethods = useForm({ defaultValues: character });

  return <FormProvider {...formMethods}>{children}</FormProvider>;
};

export { CharacterSheetProvider };
