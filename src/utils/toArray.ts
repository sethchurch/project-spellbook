export const toArray = (value: unknown) => {
  return Array.isArray(value) ? value : [value];
};
