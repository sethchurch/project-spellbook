import { CharacterSheet } from '@/components/CharacterSheet/CharacterSheet';
import { CharacterSheetProvider } from '@/components/CharacterSheet/CharacterSheetProvider';

interface CharacterPageProps {
  params: {
    characterId: string;
  };
}

const CharacterPage = ({ params: { characterId } }: CharacterPageProps) => {
  return (
    <CharacterSheetProvider characterId={Number(characterId)}>
      <CharacterSheet />
    </CharacterSheetProvider>
  );
};

export default CharacterPage;
