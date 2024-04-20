import { useFormContext } from 'react-hook-form';

enum StatIndex {
  Strength = 0,
  Dexterity = 1,
  Constitution = 2,
  Intelligence = 3,
  Wisdom = 4,
  Charisma = 5,
}

const useFormStat = (stat: StatIndex) => {
  const { getValues } = useFormContext();
  const stats = getValues('stats');
  return stats[stat];
};

export { StatIndex, useFormStat };
