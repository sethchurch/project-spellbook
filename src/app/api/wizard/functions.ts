export const createCharacter = {
  name: 'create_character',
  description: 'Creates a character based on the provided name and backstory.',
  parameters: {
    type: 'object',
    properties: {
      race: {
        type: 'string',
      },
      class: {
        type: 'string',
        description:
          "The class of the character with level included and any subclass inside parens. If multiclassing is appropriate delimit with / (e.g. 'Paladin 2 / Bard 3 (College of Swords)')",
      },
      background: {
        type: 'string',
      },
      alignment: {
        type: 'string',
        enum: [
          'Lawful Good',
          'Neutral Good',
          'Chaotic Good',
          'Lawful Neutral',
          'Neutral',
          'Chaotic Neutral',
          'Lawful Evil',
          'Neutral Evil',
          'Chaotic Evil',
        ],
      },
      stats: {
        type: 'array',
        description: 'The stats of the character in the order of str, dex, con, int, wis, cha',
        items: {
          type: 'number',
        },
      },
      savingThrows: {
        type: 'array',
        items: {
          type: 'string',
          enum: ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'],
        },
      },
      skills: {
        type: 'array',
        items: {
          type: 'string',
          enum: [
            'acrobatics',
            'animal handling',
            'arcana',
            'athletics',
            'deception',
            'history',
            'insight',
            'intimidation',
            'investigation',
            'medicine',
            'nature',
            'perception',
            'performance',
            'persuasion',
            'religion',
            'sleight of hand',
            'stealth',
            'survival',
          ],
        },
      },
      armorClass: {
        type: 'number',
      },
      speed: {
        type: 'number',
      },
      attacks: {
        type: 'array',
        description: 'The attacks of the character',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'The name of the attack',
            },
            bonus: {
              type: 'number',
              description: 'The bonus of the attack',
            },
            damage: {
              type: 'string',
              description: 'The damage of the attack',
            },
            damageType: {
              type: 'string',
              description: 'The damage type of the attack',
            },
            description: {
              type: 'string',
              description: 'The description of the attack',
            },
          },
        },
      },
      resources: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'The name of the resource',
            },
            current: {
              type: 'number',
              description: 'The current value of the resource',
            },
            max: {
              type: 'number',
              description: 'The max value of the resource',
            },
            source: {
              type: 'string',
              description: 'The source of the resource',
            },
          },
        },
      },
      features: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'The name of the feature',
            },
            description: {
              type: 'string',
              description: 'The description of the feature',
            },
            source: {
              type: 'string',
              description: 'The source of the feature',
            },
          },
        },
      },
      bio: {
        type: 'object',
        properties: {
          personalityTraits: {
            type: 'string',
            description: 'The personality traits of the character',
          },
          ideals: {
            type: 'string',
            description: 'The ideals of the character',
          },
          bonds: {
            type: 'string',
            description: 'The bonds of the character',
          },
          flaws: {
            type: 'string',
            description: 'The flaws of the character',
          },
        },
      },
    },
  },
};
