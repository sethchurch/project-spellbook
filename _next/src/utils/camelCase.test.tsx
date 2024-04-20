import { camelCase } from './camelCase';

describe('camelCase', () => {
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
