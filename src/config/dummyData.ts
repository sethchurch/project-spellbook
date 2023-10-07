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
    { name: 'Longsword', bonus: 5, damage: '1d8+3', damageType: 'slashing', description: 'long sword' },
    { name: 'Dagger', bonus: 5, damage: '1d4+3', damageType: 'piercing', description: 'small sword' },
    { name: 'Shortbow', bonus: 17, damage: '1d6+3', damageType: 'piercing', description: 'shoots sword' },
    { name: 'Vicious Mockery', bonus: 5, damage: '1d4+3', damageType: 'psychic', description: 'mocks you' },
    { name: 'Thunderwave', bonus: 5, damage: '1d8+3', damageType: 'thunder', description: 'thunder' },
    { name: 'Healing Word', bonus: 1, damage: '1d4+3', damageType: 'healing', description: 'heals you' },
    { name: 'Fireball', savingThrow: 'str', damage: '8d6', damageType: 'fire', description: 'fire' },
  ],
  resources: [
    { name: 'Lay on Hands', current: 15, max: 15, source: 'Paladin' },
    { name: 'Bardic Inspiration', current: 3, max: 3, source: 'Bard' },
    { name: 'Wand of Fireball Charges', current: 3, max: 3, source: 'Wand of Fireball' },
  ],
  features: [
    {
      name: 'Divine Sense',
      description:
        'As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell.',
      source: 'Paladin',
    },
    {
      name: 'Lay on Hands',
      description:
        'Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5.',
      source: 'Paladin',
    },
    {
      name: 'Fighting Style (',
      description: 'You adopt a particular style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again.',
      source: 'Paladin',
    }
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
    personalityTraits: "I will always listen to the opinions of my friends, even if I don't agree with them.",
    ideals: 'I will do anything to protect my friends.',
    bonds: "I'm loyal to my friends and will do anything in my power to help them.",
    flaws: 'I have a weakness for the vices of the city, especially hard drink.',
  },
};

export { character, characterSheetTitleFields, characterSkills, characterStats, loremIpsum, savingThrows, statNames };
