export const bonusify = (value: number) => {
  return value < 0 ? `${value}` : `+${value}`;
};

export const getProficencyBonus = (level: number): number => {
  if (level < 5) {
    return 2;
  }
  if (level < 9) {
    return 3;
  }
  if (level < 13) {
    return 4;
  }
  if (level < 17) {
    return 5;
  }
  return 6;
};

export const calcStatBonus = (stat: number) => {
  return Math.floor(stat / 2) - 5;
};
