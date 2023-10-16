import { CharacterSheet } from '@/components/CharacterSheet/CharacterSheet';
import { CharacterSheetProvider } from '@/components/CharacterSheet/CharacterSheetProvider';
import { MaxWidthWrapper } from '@/components/Layout/MaxWidthWrapper';

interface CharacterPageProps {
  params: {
    characterId: string;
  };
}

const CharacterPage = ({ params: { characterId } }: CharacterPageProps) => {
  return (
    <MaxWidthWrapper>
      <CharacterSheetProvider characterId={Number(characterId)}>
        <CharacterSheet />
      </CharacterSheetProvider>
    </MaxWidthWrapper>
  );
};

export default CharacterPage;
