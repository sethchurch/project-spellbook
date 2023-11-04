type Stat = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha';

type Proficiency = {
  name: string;
  stat: Stat;
};

type SkillLookup = {
  [key in Stat]: string[];
};

const statLongNameLookup: { [key in Stat]: string } = {
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
  const statSkills = skills.map((name) => ({ name, stat: stat as Stat }));
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

type InventoryItem = {
  name: string;
  description: string;
  qty: number;
  weight: number;
};

type Attack = {
  name: string;
  bonus: number;
  damage: string;
  damageType: string;
  description: string;
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
  features?: { name: string; description: string; source: string }[];
  senses?: { name: string; description: string; source: string }[];
  proficiencies?: { languages: string; weapons: string; armor: string; other: string };
  bio?: { personalityTraits: string; ideals: string; bonds: string; flaws: string };
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
  notes: '',
  backstory: '',
  bio: { personalityTraits: '', ideals: '', bonds: '', flaws: '' },
  deathSaves: { successes: 0, failures: 0 },
  hitDice: { current: '1d8', max: '1d8' },
  hitPoints: { current: 0, max: 0, temporary: 0 },
  inventory: [],
  conditions: [],
};

export { characterDefaults, characterSkills, savingThrows, skillLookup, statLongNameLookup };
export type { Attack, Character, InventoryItem, Proficiency, SkillLookup, Stat };
