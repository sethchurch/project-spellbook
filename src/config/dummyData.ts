import type { Character } from './CharacterConfig';
import { characterSkills, savingThrows } from './CharacterConfig';

const statNames = ['Str', 'Dex', 'Con', 'Int', 'Wis', 'Cha'];
const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum orci quis tincidunt ferm. ';

const character = {
  name: 'Tyren Torkain',
  race: 'Half-Elf',
  experience: 1000,
  class: 'Paladin 2 / Bard 3 (College of Swords)',
  background: 'Acolyte',
  alignment: 'Chaotic Good',
  stats: [17, 12, 16, 8, 13, 18],
  savingThrows: ['strength', 'charisma'],
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
    { name: 'Wild Shape', current: 2, max: 2, source: 'Druid' },
    { name: 'Rage', current: 2, max: 2, source: 'Barbarian' },
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
      name: 'Fighting Style (Defense)',
      description:
        'You adopt a particular style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again.',
      source: 'Paladin',
    },
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
  notes:
    "Session 1:\r\rwe ran into a group of goblins and killed them all. I got a new sword. It's pretty cool. I also got a new shield. It's pretty cool too.\r\rSession 2:\r\rApprently theres a druid in the forest we should find him goes by the name of Oakleaf. We also found a hidden cave with some treasure in it.\r\rSession 3:\r\rWe finally found Oakleaf and he gave us a quest to retrieve a magical artifact from a nearby dungeon. We fought some skeletons on the way there.\r\rSession 4:\r\rWe made it to the dungeon and fought our way through some traps and monsters. We found the artifact and brought it back to Oakleaf. He rewarded us with some gold and a magic item each.\r\rSession 5:\r\rWe heard rumors of a dragon terrorizing a nearby town. We decided to investigate and found out that it was being controlled by an evil wizard. We defeated the wizard and freed the dragon, who flew away peacefully.",
} as Character;

export { character, characterSkills, loremIpsum, savingThrows, statNames };
