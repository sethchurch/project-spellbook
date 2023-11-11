import type { Stat } from '@/config/CharacterConfig';

type SpellStatOptions = {
  key: 'Strength' | 'Dexterity' | 'Constitution' | 'Intelligence' | 'Wisdom' | 'Charisma';
  value: Stat;
};

export const statLookup = {
  Strength: 0,
  Dexterity: 1,
  Constitution: 2,
  Intelligence: 3,
  Wisdom: 4,
  Charisma: 5,
};

export const spellStatOptions: SpellStatOptions[] = [
  { key: 'Strength', value: 'str' },
  { key: 'Dexterity', value: 'dex' },
  { key: 'Constitution', value: 'con' },
  { key: 'Intelligence', value: 'int' },
  { key: 'Wisdom', value: 'wis' },
  { key: 'Charisma', value: 'cha' },
];
