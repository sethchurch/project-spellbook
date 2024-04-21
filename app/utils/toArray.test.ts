import { toArray } from './toArray';

describe('toArray', () => {
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
