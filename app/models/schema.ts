import { boolean, numeric, pgTable, serial, smallint, text } from 'drizzle-orm/pg-core';

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
