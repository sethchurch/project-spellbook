const capitalize = (str: string) => {
  if (!str) return str;

  const strList = str.split(' ');
  const capitalizedStrList = strList.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  return capitalizedStrList.join(' ');
};

export { capitalize };
