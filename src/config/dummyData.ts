const characterStats = [17, 16, 14, 8, 15, 11];
const statNames = ['Str', 'Dex', 'Con', 'Int', 'Wis', 'Cha'];

const strSkills = ['athletics'];
const dexSkills = ['acrobatics', 'sleight of hand', 'stealth'];
const intSkills = ['arcana', 'history', 'investigation', 'nature', 'religion'];
const wisSkills = ['animal handling', 'insight', 'medicine', 'perception', 'survival'];
const chaSkills = ['deception', 'intimidation', 'performance', 'persuasion'];
const characterSkills = [...strSkills, ...dexSkills, ...intSkills, ...wisSkills, ...chaSkills];

const savingThrows = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
const characterSheetTitleFields = ['Name', 'Race', 'Experience', 'Class', 'Background', 'Alignment'];
const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum orci quis tincidunt ferm. ';

const character = {
  name: 'Tyren',
  race: 'Half-Elf',
  experience: 1000,
  class: [
    { name: 'Paladin', level: 2 },
    { name: 'Bard', level: 3 },
  ],
  background: 'Acolyte',
  alignment: 'Chaotic Good',
  stats: [16, 12, 16, 8, 13, 18],
  savingThrows: ['strength', 'charisma'],
  skills: {
    proficent: ['athletics', 'acrobatics', 'insight', 'intimidation', 'performance', 'persuasion'],
    expert: ['athletics', 'intimidation'],
  },
  armorClass: 16,
  speed: 30,
  initiative: 1,
  inspired: true,
  conditions: [
    {
      name: 'Blessed',
      description: 'You have been blessed by a god',
      duration: '1 hour',
    },
  ],
  hitPoints: { current: 28, max: 28, temporary: 0 },
  hitDice: { current: 5, max: 5 },
  deathSaves: { successes: 2, failures: 1 },
  attacks: [
    {
      name: 'Longsword',
      bonus: 5,
      damage: '1d8+3',
      type: 'slashing',
      description: 'A longsword',
    },
    {
      name: 'Dagger',
      bonus: 5,
      damage: '1d4+3',
      type: 'piercing',
      description: 'A dagger',
    },
  ],
  senses: [
    { name: 'Passive Perception - 13', description: '13', source: 'wisdom' },
    { name: 'Darkvision - 60ft', description: '60ft', source: 'Half-elf' },
    { name: 'Truesight - 60ft', description: '60ft', source: 'Blessed' },
  ],
  languages: ['Common', 'Dwarvish', 'Elvish'],
  proficiencies: [
    'Light Armor',
    'Medium Armor',
    'Heavy Armor',
    'Shields',
    'Simple Weapons',
    'Martial Weapons',
    'Herbalism Kit',
  ],
};

export { character, characterSheetTitleFields, characterSkills, characterStats, loremIpsum, savingThrows, statNames };
