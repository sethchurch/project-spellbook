import { useParams } from '@remix-run/react';

import { CharacterSheet } from '@/features/characters';
import { CharacterSheetProvider } from '@/features/characters/components/CharacterSheet/CharacterSheetProvider';

const CharacterPage = () => {
  const { characterId } = useParams();
  return (
    <div className="m-1 md:m-6">
      <CharacterSheetProvider characterId={Number(characterId)}>
        <CharacterSheet />
      </CharacterSheetProvider>
    </div>
  );
};

export default CharacterPage;
