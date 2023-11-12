import type { LongStat, Spell } from '@/config/CharacterConfig';
import { StatIndex } from '@/hooks/useFormStat';

type SpellStatOptions = {
  key: LongStat;
  value: StatIndex;
};

export const spellStatOptions: SpellStatOptions[] = [
  { key: 'Strength', value: StatIndex.Strength },
  { key: 'Dexterity', value: StatIndex.Dexterity },
  { key: 'Constitution', value: StatIndex.Constitution },
  { key: 'Intelligence', value: StatIndex.Intelligence },
  { key: 'Wisdom', value: StatIndex.Wisdom },
  { key: 'Charisma', value: StatIndex.Charisma },
];

export const defaultSpellOptions: Spell = {
  name: '',
  damage: '',
  damageType: '',
  description: '',
  bonus: 0,
  level: 0,
  range: '',
  components: '',
  duration: '',
  castingTime: '',
  school: 'abjuration',
  ritual: false,
  concentration: false,
  showInActionList: false,
};
