const response = {
  race: 'Elf',
  class: 'Bard',
  background: 'Sage',
  alignment: 'Neutral Good',
  stats: [8, 16, 12, 14, 10, 16],
  savingThrows: ['dexterity', 'charisma'],
  skills: {
    proficent: ['arcana', 'history', 'insight', 'perception', 'performance', 'persuasion'],
  },
  armorClass: 13,
  speed: 30,
  attacks: [
    {
      name: 'Rapier',
      bonus: 5,
      damage: '1d8+3',
      damageType: 'piercing',
      description: 'A finesse weapon used for precise strikes.',
    },
  ],
  resources: [
    {
      name: 'Bardic Inspiration',
      current: 5,
      max: 5,
      source: 'Bard Class',
    },
    {
      name: 'Spells',
      current: 4,
      max: 4,
      source: 'Bard Class',
    },
  ],
  features: [
    {
      name: 'Bardic Inspiration',
      description:
        'As a bonus action, inspire others through stirring words or music. Grant an ally a d6 to add to ability checks, attack rolls, or saving throws.',
      source: 'Bard Class',
    },
    {
      name: 'Jack of All Trades',
      description: 'Add half proficiency bonus to ability checks you are not proficient in.',
      source: 'Bard Class',
    },
    {
      name: 'Song of Rest',
      description:
        'During a short rest, you can use soothing music or oration to help your companions regain hit points. They regain an extra 1d6 hit points.',
      source: 'Bard Class',
    },
    {
      name: 'Expertise',
      description:
        'Choose two skills you are proficient in. Your proficiency bonus is doubled for ability checks using those skills.',
      source: 'Bard Class',
    },
    {
      name: 'Lore',
      description: 'You gain proficiency in three skills of your choice.',
      source: 'Sage Background',
    },
    {
      name: 'Researcher',
      description:
        'When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it.',
      source: 'Sage Background',
    },
  ],
  bio: {
    personalityTraits: 'Curious and open-minded, always seeking to learn and experience new things.',
    ideals: 'Knowledge is power, and sharing knowledge is the greatest gift to society.',
    bonds: 'I am dedicated to preserving history and knowledge for future generations.',
    flaws: 'I can become easily distracted by new pieces of information or interesting stories.',
  },
};

export { response };
