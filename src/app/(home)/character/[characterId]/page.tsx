import { CharacterSheet } from '@/components/CharacterSheet/CharacterSheet';
import { CharacterSheetProvider } from '@/components/CharacterSheet/CharacterSheetProvider';

interface CharacterPageProps {
  params: {
    characterId: string;
  };
}

const CharacterPage = ({ params }: CharacterPageProps) => {
  return (
    <CharacterSheetProvider characterId={Number(params.characterId)}>
      <CharacterSheet />
    </CharacterSheetProvider>
  );
};

export default CharacterPage;
