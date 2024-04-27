export const getErrorMessage = (error: unknown): string => {
  if (typeof error === 'string') return error;
  if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') {
    return error.message;
  }
  console.error('Unable to get error message for error', error);
  return 'Unknown Error';
};

export const toArray = (value: unknown) => {
  return Array.isArray(value) ? value : [value];
};

export const capitalize = (str: string) => {
  if (!str) return str;

  const strList = str.split(' ');
  const capitalizedStrList = strList.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  return capitalizedStrList.join(' ');
};

export const camelCase = (str: string) => {
  if (!str) return str;

  const strList = str.toLowerCase().split(' ');
  const strMap = strList.map((word, idx) => {
    if (idx === 0) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return strMap.join('');
};

export const isBrowser = typeof document !== 'undefined' && typeof process === 'undefined';
