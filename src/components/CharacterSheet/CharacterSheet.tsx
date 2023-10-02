import { CharacterSheetProvider } from './CharacterSheetProvider';
import { CoreTab } from './CoreTab';

const CharacterSheet = () => {
  return (
    <div className="bg-pod-alt m-2 rounded-lg md:m-6">
      <CharacterSheetProvider>
        <CoreTab />
      </CharacterSheetProvider>
    </div>
  );
};

export { CharacterSheet };
