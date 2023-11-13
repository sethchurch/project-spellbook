import type { LongStat, Spell, SpellSchool } from '@/config/CharacterConfig';
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

type SpellSchoolOptions = {
  key: SpellSchool;
  displayName: string;
};

export const spellSchoolOptions: SpellSchoolOptions[] = [
  { key: 'abjuration', displayName: 'Abjuration' },
  { key: 'conjuration', displayName: 'Conjuration' },
  { key: 'divination', displayName: 'Divination' },
  { key: 'enchantment', displayName: 'Enchantment' },
  { key: 'evocation', displayName: 'Evocation' },
  { key: 'illusion', displayName: 'Illusion' },
  { key: 'necromancy', displayName: 'Necromancy' },
  { key: 'transmutation', displayName: 'Transmutation' },
];

export const defaultSpellOptions: Spell = {
  name: '',
  damage: '',
  damageType: '',
  description: '',
  bonus: 0,
  level: 0,
  range: '30ft.',
  components: { verbal: false, somatic: false, material: false, materialDescription: '' },
  duration: 'Instantaneous',
  castingTime: '1 action',
  school: 'abjuration',
  ritual: false,
  concentration: false,
};
