import { CharacterSheetPod } from './CharacterSheetPod';

interface StatDisplayProps {
  stat: number;
}

const StatDisplay = ({ stat }: StatDisplayProps) => {
  return (
    <CharacterSheetPod className="aspect-square" variant="alt">
      <p className="m-auto text-3xl">{stat}</p>
    </CharacterSheetPod>
  );
};

export { StatDisplay };
