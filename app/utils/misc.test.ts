import { camelCase, capitalize, toArray } from './misc';

describe(toArray.name, () => {
  it('returns the array unchanged if the input is an array', () => {
    const inputArray = [1, 2, 3];
    const result = toArray(inputArray);
    expect(result).toBe(inputArray);
  });

  it('wraps a non-array value in an array', () => {
    const inputNumber = 42;
    const result = toArray(inputNumber);
    expect(result).toEqual([inputNumber]);
  });

  it('handles null input correctly', () => {
    const inputNull = null;
    const result = toArray(inputNull);
    expect(result).toEqual([inputNull]);
  });

  it('handles undefined input correctly', () => {
    const inputUndefined = undefined;
    const result = toArray(inputUndefined);
    expect(result).toEqual([inputUndefined]);
  });

  it('wraps string inputs in an array', () => {
    const inputString = 'test';
    const result = toArray(inputString);
    expect(result).toEqual([inputString]);
  });

  it('wraps boolean inputs in an array', () => {
    const inputBoolean = true;
    const result = toArray(inputBoolean);
    expect(result).toEqual([inputBoolean]);
  });

  it('wraps object inputs in an array', () => {
    const inputObject = { key: 'value' };
    const result = toArray(inputObject);
    expect(result).toEqual([inputObject]);
  });
});

describe(capitalize.name, () => {
  it('should capitalize a single word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('should capitalize multiple words', () => {
    expect(capitalize('hello world')).toBe('Hello World');
  });

  it('should capitalize a single letter', () => {
    expect(capitalize('h')).toBe('H');
  });

  it('should handle empty strings', () => {
    expect(capitalize('')).toBe('');
  });
});

describe(camelCase.name, () => {
  it('Should return an empty string if given an empty string', () => {
    expect(camelCase('')).toBe('');
  });

  it('Should return a string with no spaces', () => {
    expect(camelCase('this is a test')).toBe('thisIsATest');
  });

  it('Should return a string with no spaces and all lowercase', () => {
    expect(camelCase('This Is A Test')).toBe('thisIsATest');
  });
});
