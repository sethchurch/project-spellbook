const camelCase = (str: string) => {
  if (!str) return str;

  const strList = str.toLowerCase().split(' ');
  const strMap = strList.map((word, idx) => {
    if (idx === 0) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return strMap.join('');
};

export { camelCase };
