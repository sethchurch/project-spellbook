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

export { characterSheetTitleFields, characterSkills, characterStats, loremIpsum, savingThrows, statNames };
