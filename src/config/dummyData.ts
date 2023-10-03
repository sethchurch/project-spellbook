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
  class: 'Paladin 2 / Bard 3 (College of Swords)',
  // class: [
  //   { name: 'Paladin', level: 2 },
  //   { name: 'Bard', level: 3 },
  // ],
  background: 'Acolyte',
  alignment: 'Chaotic Good',
  stats: [17, 12, 16, 8, 13, 18],
  savingThrows: ['strength save', 'charisma save'],
  skills: {
    proficent: ['athletics', 'religion', 'insight', 'performance', 'persuasion'],
    expert: ['athletics', 'intimidation'],
  },
  armorClass: 16,
  speed: 30,
  initiative: 1,
  inspired: true,
  conditions: [{ name: 'Blessed', description: 'You have been blessed by a god', duration: '1 hour' }],
  hitPoints: { current: 15, max: 28, temporary: 3 },
  hitDice: { current: '3d8', max: '5d8' },
  deathSaves: { successes: 2, failures: 1 },
  attacks: [
    { name: 'Longsword', bonus: 5, damage: '1d8+3', type: 'slashing', description: 'long sword' },
    { name: 'Dagger', bonus: 5, damage: '1d4+3', type: 'piercing', description: 'small sword' },
    { name: 'Shortbow', bonus: 5, damage: '1d6+3', type: 'piercing', description: 'shoots sword' },
  ],
  senses: [
    { name: 'Passive Perception - 13', description: '13', source: 'wisdom' },
    { name: 'Darkvision - 60ft', description: '60ft', source: 'Half-elf' },
    { name: 'Truesight - 60ft', description: '60ft', source: 'Blessed' },
  ],
  proficiencies: {
    languages: 'Common, Elvish, Dwarvish',
    weapons: 'Simple Weapons, Martial Weapons, Longswords, Rapiers, Shortswords, Shortbows, Longbows',
    armor: 'Light Armor, Medium Armor, Shields',
    other: 'Lute, Vechicles (Land), Disguise Kit, Forgery Kit, Thieves Tools',
  },
  bio: {
    traits: "I will always listen to the opinions of my friends, even if I don't agree with them.",
    ideals: 'I will do anything to protect my friends.',
    bonds: "I'm loyal to my friends and will do anything in my power to help them.",
    flaws: 'I have a weakness for the vices of the city, especially hard drink.',
  },
};

export { character, characterSheetTitleFields, characterSkills, characterStats, loremIpsum, savingThrows, statNames };
