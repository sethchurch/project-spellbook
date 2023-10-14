import { CoreTab } from './CoreTab';

const CharacterSheet = () => {
  return (
    <div className="bg-pod-alt m-2 rounded-lg md:m-6">
      <div className="h-32 w-full rounded-t-lg bg-gradient-to-r from-violet-700 to-violet-950 md:h-64" />
      <CoreTab />
    </div>
  );
};

export { CharacterSheet };
