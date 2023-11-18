import { boolean, numeric, pgTable, serial, smallint, text } from 'drizzle-orm/pg-core';

// type ShortStat = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha';
// type LongStat = 'Strength' | 'Dexterity' | 'Constitution' | 'Intelligence' | 'Wisdom' | 'Charisma';

// type Proficiency = {
//   name: string;
//   stat: ShortStat;
// };

// type SkillLookup = {
//   [key in ShortStat]: string[];
// };

// const statLongNameLookup: { [key in ShortStat]: string } = {
//   str: 'Strength',
//   dex: 'Dexterity',
//   con: 'Constitution',
//   int: 'Intelligence',
//   wis: 'Wisdom',
//   cha: 'Charisma',
// };

// const skillLookup: SkillLookup = {
//   str: ['athletics'],
//   dex: ['acrobatics', 'sleight of hand', 'stealth'],
//   con: [],
//   int: ['arcana', 'history', 'investigation', 'nature', 'religion'],
//   wis: ['animal handling', 'insight', 'medicine', 'perception', 'survival'],
//   cha: ['deception', 'intimidation', 'performance', 'persuasion'],
// };

// const characterSkills = Object.entries(skillLookup).reduce<Proficiency[]>((acc, [stat, skills]) => {
//   const statSkills = skills.map((name) => ({ name, stat: stat as ShortStat }));
//   return [...acc, ...statSkills];
// }, []);

// const savingThrows = [
//   { name: 'strength', stat: 'str' },
//   { name: 'dexterity', stat: 'dex' },
//   { name: 'constitution', stat: 'con' },
//   { name: 'intelligence', stat: 'int' },
//   { name: 'wisdom', stat: 'wis' },
//   { name: 'charisma', stat: 'cha' },
// ];

// interface Detail {
//   name: string;
//   description: string;
//   source?: string;
// }

// type InventoryItem = Detail & {
//   qty?: number;
//   weight?: number;
// };

// type Attack = Detail & {
//   bonus: number;
//   damage: string;
//   damageType: string;
// };

// type SpellSchool =
//   | 'abjuration'
//   | 'conjuration'
//   | 'divination'
//   | 'enchantment'
//   | 'evocation'
//   | 'illusion'
//   | 'necromancy'
//   | 'transmutation';

// type Spell = Attack & {
//   level: number;
//   range: string;
//   components: { verbal: boolean; somatic: boolean; material: boolean; materialDescription?: string };
//   duration: string;
//   castingTime: string;
//   school: SpellSchool;
//   ritual: boolean;
//   concentration: boolean;
//   showInActionList: boolean;
// };

// type Condition = {
//   name: string;
//   description: string;
//   duration: string;
// };

// type HitPoints = {
//   current: number;
//   max: number;
//   temporary: number;
// };

// type Resource = {
//   name: string;
//   current: number;
//   max: number;
//   source: string;
// };

// type AlternateProfiencies = {
//   languages: string;
//   weapons: string;
//   armor: string;
//   other: string;
// };

// type BioDetails = {
//   personalityTraits?: string;
//   ideals?: string;
//   bonds?: string;
//   flaws?: string;
//   age?: string;
//   height?: string;
//   weight?: string;
//   eyesColor?: string;
//   skinColor?: string;
//   hairColor?: string;
//   orginizations?: string;
//   featuresTraits?: string;
//   treasure?: string;
// };

// type CharacterImages = {
//   portrait?: string;
//   token?: string;
//   banner?: string;
// };

// type ProficientOrExpertList = {
//   proficent: string[];
//   expert: string[];
// };

// type Character = {
//   name: string;
//   race: string;
//   level: number;
//   class: string;
//   background: string;
//   alignment: string;
//   stats: number[];
//   savingThrows: Partial<ProficientOrExpertList>;
//   skills: ProficientOrExpertList;
//   armorClass: number;
//   speed: number;
//   initiative: number;
//   inspired: boolean;
//   conditions?: Condition[];
//   hitPoints?: HitPoints;
//   hitDice?: { current: string; max: string };
//   deathSaves?: { successes: number; failures: number };
//   attacks?: Attack[];
//   resources?: Resource[];
//   features?: Detail[];
//   senses?: Detail[];
//   images?: CharacterImages;
//   proficiencies?: AlternateProfiencies;
//   bio?: BioDetails;
//   spells?: Spell[][]; // [0] = cantrips, [1] = 1st level, etc.
//   spellStat?: ShortStat;
//   notes?: string;
//   inventory: InventoryItem[];
//   backstory?: string;
// };

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  avatar: text('avatar'),
});

export const characters = pgTable('characters', {
  id: serial('id').primaryKey(),
  userId: numeric('user_id').references(() => users.id),
  name: text('name'),
  race: text('race'),
  level: numeric('level'),
  class: text('class'),
  background: text('background'),
  alignment: text('alignment'),
  armorClass: numeric('armor_class'),
  speed: numeric('speed'),
  inspired: boolean('inspired'),
  initiative: numeric('initiative'),
  notes: text('notes'),
  backstory: text('backstory'),
});

export const characterHitPoints = pgTable('character_hit_points', {
  id: serial('id').primaryKey(),
  characterId: numeric('character_id').references(() => characters.id),
  current: numeric('current'),
  max: numeric('max'),
  temporary: numeric('temporary'),
});

export const characterHitDice = pgTable('character_hit_dice', {
  id: serial('id').primaryKey(),
  characterId: numeric('character_id').references(() => characters.id),
  current: text('current'),
  max: text('max'),
});

export const characterStats = pgTable('character_stats', {
  id: serial('id').primaryKey(),
  characterId: numeric('character_id').references(() => characters.id),
  str: numeric('str'),
  dex: numeric('dex'),
  con: numeric('con'),
  int: numeric('int'),
  wis: numeric('wis'),
  cha: numeric('cha'),
});

export const characterSavingThrows = pgTable('character_saving_throws', {
  id: serial('id').primaryKey(),
  characterId: numeric('character_id').references(() => characters.id),
  str: boolean('str'),
  dex: boolean('dex'),
  con: boolean('con'),
  int: boolean('int'),
  wis: boolean('wis'),
  cha: boolean('cha'),
});

export const characterSkills = pgTable('character_skills', {
  id: serial('id').primaryKey(),
  characterId: numeric('character_id').references(() => characters.id),
  acrobatics: smallint('acrobatics'), // 0 - not proficient, 1 - proficient, 2 - expert
  animalHandling: smallint('animal_handling'),
  arcana: smallint('arcana'),
  athletics: smallint('athletics'),
  deception: smallint('deception'),
  history: smallint('history'),
  insight: smallint('insight'),
  intimidation: smallint('intimidation'),
  investigation: smallint('investigation'),
  medicine: smallint('medicine'),
  nature: smallint('nature'),
  perception: smallint('perception'),
  performance: smallint('performance'),
  persuasion: smallint('persuasion'),
  religion: smallint('religion'),
  sleightOfHand: smallint('sleight_of_hand'),
  stealth: smallint('stealth'),
  survival: smallint('survival'),
});

export const characterProficiencies = pgTable('character_proficiencies', {
  id: serial('id').primaryKey(),
  characterId: numeric('character_id').references(() => characters.id),
  languages: text('languages'),
  weapons: text('weapons'),
  armor: text('armor'),
  other: text('other'),
});
