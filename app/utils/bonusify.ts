const bonusify = (value: number) => {
  if (value < 0) {
    return `${value}`;
  }

  return `+${value}`;
};

export { bonusify };
