type ShortStat = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha';
type LongStat = 'Strength' | 'Dexterity' | 'Constitution' | 'Intelligence' | 'Wisdom' | 'Charisma';

type Proficiency = {
  name: string;
  stat: ShortStat;
};

type SkillLookup = {
  [key in ShortStat]: string[];
};

const statLongNameLookup: { [key in ShortStat]: string } = {
  str: 'Strength',
  dex: 'Dexterity',
  con: 'Constitution',
  int: 'Intelligence',
  wis: 'Wisdom',
  cha: 'Charisma',
};

const skillLookup: SkillLookup = {
  str: ['athletics'],
  dex: ['acrobatics', 'sleight of hand', 'stealth'],
  con: [],
  int: ['arcana', 'history', 'investigation', 'nature', 'religion'],
  wis: ['animal handling', 'insight', 'medicine', 'perception', 'survival'],
  cha: ['deception', 'intimidation', 'performance', 'persuasion'],
};

const characterSkills = Object.entries(skillLookup).reduce<Proficiency[]>((acc, [stat, skills]) => {
  const statSkills = skills.map((name) => ({ name, stat: stat as ShortStat }));
  return [...acc, ...statSkills];
}, []);

const savingThrows = [
  { name: 'strength', stat: 'str' },
  { name: 'dexterity', stat: 'dex' },
  { name: 'constitution', stat: 'con' },
  { name: 'intelligence', stat: 'int' },
  { name: 'wisdom', stat: 'wis' },
  { name: 'charisma', stat: 'cha' },
];

interface Detail {
  name: string;
  description: string;
  source?: string;
}

type InventoryItem = Detail & {
  qty?: number;
  weight?: number;
};

type Attack = Detail & {
  bonus: number;
  damage: string;
  damageType: string;
};

type SpellSchool =
  | 'abjuration'
  | 'conjuration'
  | 'divination'
  | 'enchantment'
  | 'evocation'
  | 'illusion'
  | 'necromancy'
  | 'transmutation';

type Spell = Attack & {
  level: number;
  range: string;
  components: string;
  duration: string;
  castingTime: string;
  school: SpellSchool;
  ritual: boolean;
  concentration: boolean;
  showInActionList: boolean;
};

type Condition = {
  name: string;
  description: string;
  duration: string;
};

type HitPoints = {
  current: number;
  max: number;
  temporary: number;
};

type Resource = {
  name: string;
  current: number;
  max: number;
  source: string;
};

type Character = {
  name: string;
  race: string;
  level: number;
  class: string;
  background: string;
  alignment: string;
  stats: number[];
  savingThrows: string[];
  skills: { proficent: string[]; expert: string[] };
  armorClass: number;
  speed: number;
  initiative: number;
  inspired: boolean;
  conditions?: Condition[];
  hitPoints?: HitPoints;
  hitDice?: { current: string; max: string };
  deathSaves?: { successes: number; failures: number };
  attacks?: Attack[];
  resources?: Resource[];
  features?: Detail[];
  senses?: Detail[];
  proficiencies?: {
    languages: string;
    weapons: string;
    armor: string;
    other: string;
  };
  bio?: {
    personalityTraits?: string;
    ideals?: string;
    bonds?: string;
    flaws?: string;
    age?: string;
    height?: string;
    weight?: string;
    eyesColor?: string;
    skinColor?: string;
    hairColor?: string;
    orginizations?: string;
    featuresTraits?: string;
    treasure?: string;
  };
  spells?: Spell[][]; // [0] = cantrips, [1] = 1st level, etc.
  spellStat?: ShortStat;
  notes?: string;
  inventory: InventoryItem[];
  backstory?: string;
};

const characterDefaults: Character = {
  name: 'New Character',
  race: 'Human',
  level: 1,
  class: 'Fighter',
  background: 'Acolyte',
  alignment: 'Neutral',
  stats: [10, 10, 10, 10, 10, 10],
  savingThrows: [],
  skills: { proficent: [], expert: [] },
  armorClass: 10,
  speed: 30,
  inspired: false,
  initiative: 0,
  attacks: [],
  resources: [],
  features: [],
  senses: [],
  proficiencies: { languages: '', weapons: '', armor: '', other: '' },
  spells: [[], [], [], [], [], [], [], [], [], []],
  notes: '',
  backstory: '',
  bio: {},
  deathSaves: { successes: 0, failures: 0 },
  hitDice: { current: '1d8', max: '1d8' },
  hitPoints: { current: 0, max: 0, temporary: 0 },
  inventory: [],
  conditions: [],
};

export { characterDefaults, characterSkills, savingThrows, skillLookup, statLongNameLookup };
export type {
  Attack,
  Character,
  Detail,
  InventoryItem,
  LongStat,
  Proficiency,
  ShortStat,
  SkillLookup,
  Spell,
  SpellSchool,
};
