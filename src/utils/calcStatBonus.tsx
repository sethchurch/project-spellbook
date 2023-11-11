const calcStatBonus = (stat: number) => {
  return Math.floor(stat / 2) - 5;
};

export { calcStatBonus };
