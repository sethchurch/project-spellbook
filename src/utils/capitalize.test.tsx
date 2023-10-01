import { capitalize } from './capitalize';

describe('capitalize (utils):', () => {
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
