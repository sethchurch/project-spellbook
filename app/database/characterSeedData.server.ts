import type { Prisma, PrismaClient } from '@prisma/client';

const characterResources: Prisma.ResourceCreateManyCharacterInput[] = [
  { name: 'Druidic Spell Slots', current: 10, max: 10, source: 'Druid' },
  { name: 'Cleric Spell Slots', current: 4, max: 4, source: 'Cleric' },
  { name: 'Wild Shape', current: 2, max: 2, source: 'Druid' },
  { name: "Channel Divinity: Nature's Wrath", current: 1, max: 1, source: 'Cleric' },
];

const characterAttacks: Prisma.AttackCreateManyCharacterInput[] = [
  {
    name: 'Quarterstaff',
    description: 'A simple wooden staff used for both defense and spellcasting.',
    bonus: 6,
    damage: '1d8+3',
    damageType: 'Bludgeoning',
  },
  {
    name: 'Shillelagh',
    bonus: 6,
    damage: '1d8+3',
    damageType: 'Bludgeoning',
    description: "Magically imbues a wooden club or quarterstaff with nature's power.",
  },
];

const characterFeatures: Prisma.FeatureCreateManyCharacterInput[] = [
  {
    name: 'Natural Recovery',
    description: 'Regain expended spell slots during a short rest.',
    source: 'Druid',
  },
  {
    name: "Land's Stride",
    description: 'Move through difficult terrain without penalty.',
    source: 'Druid',
  },
  {
    name: "Nature's Blessing",
    description: 'Use Channel Divinity to maximize damage against a creature.',
    source: 'Cleric',
  },
];

const characterBio: Prisma.BioDetailCreateWithoutCharacterInput = {
  backstory:
    "Kai Kealynn, hailing from the nomadic Feylune Sailors of Icewind Dale, grew up amidst the harsh beauty of the north. The tribe, known for their druidic and clerical wisdom, imparted to Kai a deep understanding of the natural world and herbalism. These early years, under the vast skies and amidst the ever-changing landscapes, shaped Kai into a skilled herbalist and a keen observer of the natural order.\n\nLife for the Feylune Sailors was a dance with the seasons. Spring and fall were times of land travel, marked by quiet trading with the outside world. But it was during the summers and winters that Kai's heart truly soared – these were the seasons of sea voyages. The tribe's elders, wielding powerful druidic magic, steered their ice-made ship through the Trackless Sea, warding off pirate threats with a blend of elemental mastery and sheer intimidation. These journeys imbued Kai with a love for the sea's mysteries and a respect for its dangers.\n\nThe defining moment came when Varen, Kai's mentor, presented a parting gift, marking the end of Kai's tribal apprenticeship and the beginning of a personal quest. Leaving the familiarity of the tribe, Kai ventured into the wider world. The bustling cities like Neverwinter and Waterdeep were overwhelming at first, but Kai's adaptability and tribal knowledge eased the transition.\n\nAt the Neverwinter academy, Kai discovered a passion for archaeology. It was here that Kai met Dowvir, a fellow student and future ranger, with whom a lasting friendship was formed. Their shared connection to the Enclave sparked many collaborative ventures.\n\nDriven by tales of ancient wonders, Kai set sail for the Chultian jungles. There, amidst the dense foliage, Kai unearthed a mysterious medallion and a set of keys, their origins and purposes enigmatic and enticing. It was in these jungles that Kai also encountered a group of adventurers, assisting them against a Mantrap and briefly joining their quest for a rumored structure deep in the wilderness.\n\nHowever, a call from the Emerald Enclave regarding a situation off the coast of Neverwinter drew Kai away from Chult. With a trove of memories and unanswered mysteries, Kai set sail once more, ready to confront the new challenge, always carrying the spirit of the Feylune Sailors within.",
  personalityTraits: 'Observant and inquisitive, always seeking to uncover the secrets of the natural world.',
  ideals: 'Preserve the balance of nature and protect the wild places.',
  bonds: 'Deeply connected to the Feylune Sailors and their teachings.',
  flaws: 'Can become overly absorbed in studying and observing, sometimes losing track of time.',
  age: '278',
  height: "6' 1''",
  weight: '175',
  eyeColor: 'Blue',
  skinColor: 'Blue',
  hairColor: 'Also Blue',
  organizations: `Feylune Sailors
		Type: Nomadic Tribe
		Role: Birth Tribe, Initial Training Ground
		Description: A nomadic tribe known for their druidic and clerical teachings. The Feylune Sailors are skilled in navigation, herbalism, and elemental magic, especially adept in sea voyages.
		Connection: Kai's birth tribe, where they learned the essentials of herbalism, nature, and druidic practices.
		
		Neverwinter Academy
		Type: Educational Institution
		Role: Academic Training
		Description: A prestigious academy in Neverwinter known for its diverse curriculum, catering to a wide range of disciplines including magic, history, and archaeology.
		Connection: Where Kai studied archaeology, broadening their knowledge and skills beyond the tribal teachings.
		
		Emerald Enclave
		Type: Druidic and Ranger Faction
		Role: Affiliated Faction
		Description: An organization dedicated to maintaining the natural balance, protecting the wild, and preventing civilization from overrunning the natural world.
		Connection: Kai and Dowvir's mutual ties to this faction indicate a shared commitment to the balance of nature.`,
};

const characterSpells: Prisma.SpellCreateManyCharacterInput[] = [
  {
    name: 'Druidcraft',
    description: 'A spell to predict weather, create sensory effects, or light or snuff out a small fire.',
    level: 0,
    range: '30 feet',
    verbal: true,
    somatic: true,
    material: false,
    duration: 'Instantaneous',
    castingTime: '1 action',
    school: 'Transmutation',
  },
  {
    name: 'Create or Destroy Water',
    description: 'Create up to 10 gallons of clean water within range or destroy fog in a 30-foot cube.',
    level: 1,
    range: '30 feet',
    verbal: true,
    somatic: true,
    material: true,
    materialDescription: 'A drop of water and a pinch of dust',
    duration: 'Instantaneous',
    castingTime: '1 action',
    school: 'Conjuration',
  },
  {
    name: 'Fog Cloud',
    description: 'Create a 20-foot radius sphere of fog centered on a point within range.',
    level: 1,
    range: '120 feet',
    verbal: true,
    somatic: true,
    material: true,
    materialDescription: 'A small piece of reed or a puff of smoke',
    duration: 'Up to 1 hour',
    castingTime: '1 action',
    school: 'Conjuration',
    isConcentration: true,
  },
  {
    name: 'Speak with Animals',
    description: 'Gain the ability to comprehend and verbally communicate with beasts.',
    level: 1,
    range: 'Self',
    verbal: true,
    somatic: false,
    material: false,
    duration: '10 minutes',
    castingTime: '1 action',
    school: 'Divination',
    isRitual: true,
  },
  {
    name: 'Gust of Wind',
    description: 'Create a strong line of wind 60 feet long and 10 feet wide.',
    level: 2,
    range: 'Self (60-foot line)',
    verbal: true,
    somatic: true,
    material: true,
    materialDescription: 'A legume seed',
    duration: 'Up to 1 minute',
    castingTime: '1 action',
    school: 'Evocation',
    isConcentration: true,
  },
  {
    name: 'Water Walk',
    description: 'Grant the ability to move across any liquid surface as if it were solid ground.',
    level: 3,
    range: '30 feet',
    verbal: true,
    somatic: true,
    material: true,
    materialDescription: 'A piece of cork',
    duration: '1 hour',
    castingTime: '1 action',
    school: 'Transmutation',
    isRitual: true,
  },
  {
    name: 'Plant Growth',
    description: 'Stimulate growth in plants within a specific area.',
    level: 3,
    range: '150 fee',
    verbal: true,
    somatic: true,
    material: false,
    duration: 'Instantaneous',
    castingTime: '1 action or 8 hours',
    school: 'Transmutation',
  },
  {
    name: 'Control Water',
    description: 'Control the flow and form of water in a large area.',
    level: 4,
    range: '300 feet',
    verbal: true,
    somatic: true,
    material: false,
    duration: 'Up to 10 minutes',
    castingTime: '1 action',
    school: 'Transmutation',
    isConcentration: true,
  },
  {
    name: 'Commune with Nature',
    description: 'Gain knowledge of the surrounding territory in the outdoors.',
    level: 5,
    range: 'Self',
    verbal: true,
    somatic: false,
    material: true,
    materialDescription:
      'Incense and a sacrificial offering appropriate to your religion, together worth at least 25 gp, which the spell consumes',
    duration: 'Instantaneous',
    castingTime: '1 minute',
    school: 'Divination',
    isRitual: true,
  },
  {
    name: 'Wall of Thorns',
    description: 'Create a wall of tough, pliable, thorn-covered vines.',
    damage: '6d8',
    damageType: 'Piercing',
    level: 6,
    range: '120 feet',
    verbal: true,
    somatic: true,
    material: false,
    duration: 'Up to 10 minutes',
    castingTime: '1 action',
    school: 'Conjuration',
    isConcentration: true,
  },
  {
    name: 'Mirage Arcane',
    description:
      'Make terrain in an area up to 1 mile square look, sound, smell, and even feel like some other sort of terrain.',
    level: 7,
    range: 'Sight',
    verbal: true,
    somatic: false,
    material: true,
    materialDescription: 'A bit of fleece and a few grains of sand',
    duration: '10 days',
    castingTime: '10 minutes',
    school: 'Illusion',
  },
  {
    name: 'Tsunami',
    description: 'Conjure a massive wave of water to sweep away all in its path.',
    damage: '6d10',
    damageType: 'Bludgeoning',
    level: 8,
    range: 'Sight',
    verbal: true,
    somatic: true,
    material: false,
    duration: 'Up to 6 rounds',
    castingTime: '1 minute',
    school: 'Conjuration',
    isConcentration: true,
  },
  {
    name: 'Shapechange',
    description: 'Transform into a different creature at will.',
    level: 9,
    range: 'Self',
    verbal: true,
    somatic: true,
    material: true,
    materialDescription:
      'A jade circlet worth at least 1,500 gp, which you must place on your head before you cast the spell',
    duration: 'Up to 1 hour',
    castingTime: '1 action',
    school: 'Transmutation',
    isConcentration: true,
  },
];

const characterInventory: Prisma.InventoryItemCreateManyCharacterInput[] = [
  {
    name: 'Quarterstaff',
    description: 'A simple wooden staff used for both defense and spellcasting.',
    quantity: 1,
    weight: 4,
  },
  {
    name: "Explorer's Pack",
    description: 'A backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin.',
    quantity: 1,
    weight: 59,
  },
  {
    name: 'Druidic Focus',
    description: 'A wooden staff carved with natural motifs.',
    quantity: 1,
    weight: 4,
  },
  {
    name: 'Medallion',
    description: 'A mysterious medallion discovered in the Chultian jungles.',
    quantity: 1,
    weight: 0,
  },
  {
    name: 'Set of Keys',
    description: 'A set of keys found alongside the medallion, their purpose unknown.',
    quantity: 1,
    weight: 0,
  },
];

const characterProficiencies: Prisma.CharacterProficienciesCreateWithoutCharacterInput = {
  languages: 'Common, Elvish, Druidic',
  weapons: 'Simple weapons, longswords, shortswords, longbows, shortbows',
  armor: 'Light armor, medium armor, shields',
  other: 'Herbalism kit',
};

const characterData: Prisma.CharacterCreateWithoutUserInput = {
  castingStat: 'Wisdom',
  name: 'Kai Kealynn',
  race: 'Sea Elf',
  level: 15,
  class: 'Druid 10 (Circle of the Land) / Cleric 5 (Nature Domain)',
  background: 'Sage',
  alignment: 'NeutralGood',
  stats: {
    create: { str: 10, dex: 16, con: 14, int: 14, wis: 16, cha: 8 },
  },
  savingThrows: ['Charisma', 'Wisdom'],
  armorClass: 16,
  speed: '35 ft.',
  isInspired: false,
  initiative: 3,
  notes:
    "I chose the Sea Elf race for Kai to reflect their connection to nature and their prowess in both druidic and clerical magic. The Druid 10 / Cleric 5 combination allows Kai to tap into the power of the land and the divine, making them a versatile spellcaster and healer. The Circle of the Land (Arctic) enhances their connection to the icy regions they hail from, while the Nature Domain strengthens their bond with the natural world. Kai's background as a Sage reflects their love for knowledge and archaeology. The chosen skills, spells, and equipment are based on Kai's background, abilities, and adventures, including the medallion and keys discovered in the Chultian jungles.",
  bio: { create: characterBio },
  deathSaves: {
    create: { sucesses: 0, failures: 0 },
  },
  hitDice: {
    create: { current: '15d8', max: '15d8' },
  },
  hitPoints: {
    create: { current: 96, max: 96, temporary: 0 },
  },
  proficiencies: { create: characterProficiencies },
  attacks: {
    createMany: { data: characterAttacks },
  },
  resources: {
    createMany: { data: characterResources },
  },
  features: {
    createMany: { data: characterFeatures },
  },
  inventory: {
    createMany: { data: characterInventory },
  },
  spells: {
    createMany: { data: characterSpells },
  },
};

export const seedDefaultCharacter = async (prisma: PrismaClient, userId: string) => {
  const character = await prisma.character.create({ data: { ...characterData, userId } });
  return character;
};
