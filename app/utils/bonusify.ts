const bonusify = (value: number) => {
  return value < 0 ? `${value}` : `+${value}`;
};

export { bonusify };
