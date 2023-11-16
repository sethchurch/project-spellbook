import type { Character } from './CharacterConfig';
import { characterSkills, savingThrows } from './CharacterConfig';

const statNames = ['Str', 'Dex', 'Con', 'Int', 'Wis', 'Cha'];
const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum orci quis tincidunt ferm. ';

const character = {
  name: 'Dr Edward Idris',
  race: 'Human (Undead)',
  level: 15,
  class: 'Wizard 15 (Necromancy)',
  background: 'Sage',
  alignment: 'Neutral Evil',
  stats: [8, 14, 12, 18, 12, 10],
  savingThrows: {
    proficent: ['dexterity', 'intelligence'],
  },
  skills: {
    proficent: ['arcana', 'deception', 'medicine', 'history', 'religion'],
    expert: ['medicine', 'history'],
  },
  armorClass: 12,
  speed: 30,
  inspired: false,
  initiative: 2,
  attacks: [
    {
      name: 'Dagger',
      bonus: 6,
      damage: '1d4+4',
      damageType: 'piercing',
      description: 'A simple dagger for close combat.',
    },
    {
      name: 'Ray of Sickness',
      bonus: 6,
      damage: '5d8',
      damageType: 'poison',
      description: 'A ray of sickly green energy that strikes a target, dealing poison damage.',
    },
  ],
  resources: [
    {
      name: 'Hit Points',
      current: 75,
      max: 75,
      source: 'Wizard Hit Die (d6)',
    },
    {
      name: 'Arcane Recovery',
      current: 1,
      max: 1,
      source: 'Wizard Feature',
    },
    {
      name: 'Spell Slots',
      current: 15,
      max: 15,
      source: 'Wizard Spellcasting',
    },
  ],
  features: [
    {
      name: 'Necromancy Savant',
      description: 'The gold and time you must spend to copy a Necromancy spell into your spellbook is halved.',
      source: 'Wizard School of Necromancy',
    },
    {
      name: 'Grim Harvest',
      description:
        "When you kill a creature with a spell of 1st level or higher, you regain hit points equal to twice the spell's level + your Wizard level.",
      source: 'Wizard School of Necromancy',
    },
    {
      name: 'Undead Thralls',
      description: 'You can use your Channel Divinity to control undead creatures.',
      source: 'Wizard School of Necromancy',
    },
    {
      name: 'Command Undead',
      description:
        'Starting at 14th level, you can use magic to bring undead under your control, even those created by other wizards.',
      source: 'Wizard School of Necromancy',
    },
    {
      name: 'Arcane Recovery',
      description:
        'You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.',
      source: 'Wizard Feature',
    },
    {
      name: 'Spellcasting',
      description:
        'You have learned to master a few spells and cantrips. You can prepare a number of spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.',
      source: 'Wizard Feature',
    },
  ],
  senses: [],
  proficiencies: {
    languages: 'Common, Elvish',
    weapons: 'Daggers',
    armor: 'None',
    other: "Thieves' Tools",
  },
  spells: [
    [],
    [
      {
        name: 'Eternal Preservation',
        description: 'Halt the decay of a corpse, preserving it indefinitely for study or later use.',
        level: 1,
        range: 'Touch',
        components: {
          verbal: true,
          somatic: true,
          material: true,
          materialDescription: 'A pinch of salt and a drop of formaldehyde',
        },
        duration: 'Permanent',
        castingTime: '1 minute',
        school: 'necromancy',
        ritual: true,
        concentration: false,
        showInActionList: true,
      },
    ],
    [
      {
        name: 'Spectral Scalpel',
        description:
          'Summon a ghostly scalpel to perform precise cuts, causing necrotic damage to living tissue or dissecting undead foes.',
        level: 2,
        range: 'Touch',
        components: {
          verbal: false,
          somatic: true,
          material: false,
        },
        duration: 'Instantaneous',
        castingTime: '1 action',
        school: 'necromancy',
        bonus: 5,
        damage: '2d8 necrotic',
        damageType: 'Necrotic',
        ritual: false,
        concentration: false,
        showInActionList: true,
      },
      {
        name: 'Painful Truths',
        description: 'Extract information from a corpse by temporarily revitalizing its vocal cords.',
        level: 2,
        range: '5 feet',
        components: {
          verbal: true,
          somatic: true,
          material: true,
          materialDescription: 'A sprig of rosemary',
        },
        duration: 'Up to 10 minutes',
        castingTime: '1 action',
        school: 'necromancy',
        ritual: false,
        concentration: true,
        showInActionList: true,
      },
    ],
    [
      {
        name: 'Vengeful Reanimation',
        description: 'Animate a recently deceased body to fight alongside you, fueled by a desire for vengeance.',
        level: 3,
        range: '30 feet',
        components: {
          verbal: true,
          somatic: true,
          material: true,
          materialDescription: "A fragment of the deceased's clothing or body",
        },
        duration: '1 hour',
        castingTime: '1 action',
        school: 'necromancy',
        ritual: false,
        concentration: false,
        showInActionList: true,
      },
    ],
    [
      {
        name: 'Grasp of the Departed',
        description: 'Call forth ghostly hands from the ground to grasp and restrain enemies.',
        level: 4,
        range: '30 feet',
        components: {
          verbal: true,
          somatic: true,
          material: false,
        },
        duration: 'Up to 1 minute',
        castingTime: '1 action',
        school: 'necromancy',
        ritual: false,
        concentration: true,
        showInActionList: true,
        bonus: 0,
        damage: '2d6 bludgeoning',
        damageType: 'Bludgeoning',
      },
    ],
    [],
    [],
    [],
    [],
    [],
  ],
  notes:
    "I chose the Human race for the versatility and additional skill proficiency. The Wizard class, specifically the School of Necromancy, fits perfectly with the character's backstory and desire for revenge. With the Sage background, the character gains proficiency in the Arcana skill, which is essential for a powerful wizard. The character's stats prioritize Intelligence for spellcasting and Dexterity for better AC. The chosen spells and class features reflect the character's proficiency in necromancy and control over undead creatures. The character wields a dagger for close combat and can also utilize the Ray of Sickness spell for ranged attacks. Overall, this character is a formidable necromancer seeking to exact vengeance upon those who betrayed him.",
  backstory:
    "Why hello there... My name is Edward Idris, but you would be wise to refer to me as Dr. Idris. I was born in Ayhhalanh, in life as a healer I studied for decades refining my craft and saving countless lives along the way all in devotion to Alhenna the goddess of life. I was a proud doctor with a reputation to match. However my methods were a little too effective, I suppose no path in life is without detractors... I was branded a heretic and practitioner of necromancy. Stripped of my title and accused of defiling holy dead. The evidence against me while fabricated was indeed convincing. Among some of the most grotesque, an elf, who owed his life to my intervention years ago, showed his treacherous face, providing false testimony against me. I was to be executed and made an example of for my \"vile transgressions against the Shah\". I never relented, proclaiming my innocence, but my words fell on deaf ears. As I stood upon the executioner's block seeing so many I had strived all my life to save turned on me I used my dying breath to curse the world and the Shah for allowing such wrong. I vowed I would cut out the cancer that is the nature of man.\n᲼᲼\nWhat came next is truly some divine joke. \n᲼᲼\nWhatever the case, after a period of darkness I found myself lying on a table in some hidden away den with a red-faced, robed devil standing over me. It took some time before I realized this wasn't the hells I had been swept away to, but the mortal plane, the devil standing over me but a mere tiefling he seemed happy greeting me with a yank and commanding me to stand. It was only when I looked down at my hand and saw naught but bone, that is when it dawned on me. \n᲼᲼\nNecromancy, indeed,  is such a fickle thing. \n᲼᲼\nThe tiefling confused as to why what I can only assume he intended to be a mindless slave bone rattled with laughter as I cackled at what had become of the great Dr. Idris. It wasn't until much later I found out my remains were discarded, left to rot, at the bottom of the ocean apparently they were discovered by this up start hoping his practice would go unnoticed if he fished corpses from the sea rather than from some crypt. I found humor in the fact that my training that allowed me to help people in life also taught me how best to harm them so I knew just where to cut. Once I freed myself of the device he had used on my bones I made my attack.\n᲼᲼\nDeath by exsanguination occurred in 3 minutes 46 seconds. \n᲼᲼\nOnce freed of my “Master” I learned quickly that 200 years had passed, most of the world I once knew… dead… stolen from me by the same vile creatures that still roam the land. I took to studying as I frequently did. This decrepit floating den made a great veil from the world while I learned of what it had become and grasping the arcane combining it with my own medical knowledge as I once again set my mind to one task… \n᲼᲼\nI will make good on my “final” words.",
  bio: {
    personalityTraits: 'Cunning and analytical, always calculating the best course of action.',
    ideals: 'Power above all else. Will stop at nothing to achieve ultimate control.',
    bonds: 'Seeks revenge against those who wronged him and stripped him of his title.',
    flaws: 'Obsessed with the study of necromancy, often neglecting moral considerations.',
    age: 'Very Old',
    height: "5' 11'",
    Weight: '68 lbs.',
    eyeColor: 'Hollow',
    skinColor: 'Bone White',
    hairColor: 'Bald',
  },
  deathSaves: {
    successes: 0,
    failures: 0,
  },
  hitDice: {
    current: '15d6',
    max: '15d6',
  },
  hitPoints: {
    current: 75,
    max: 75,
    temporary: 0,
  },
  inventory: [],
  conditions: [],
} as Character;

export { character, characterSkills, loremIpsum, savingThrows, statNames };
