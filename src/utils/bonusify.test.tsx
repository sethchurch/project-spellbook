import { bonusify } from './bonusify';

describe('bonusify', () => {
  it('should return a positive value with a plus sign for positive input', () => {
    const result = bonusify(5);
    expect(result).toBe('+5');
  });

  it('should return a negative value with a minus sign for negative input', () => {
    const result = bonusify(-5);
    expect(result).toBe('-5');
  });

  it('should return the input value as a string for zero input', () => {
    const result = bonusify(0);
    expect(result).toBe('+0');
  });

  it('should return a string representation of a large positive value with a plus sign', () => {
    const result = bonusify(1000000);
    expect(result).toBe('+1000000');
  });

  it('should return a string representation of a large negative value with a minus sign', () => {
    const result = bonusify(-1000000);
    expect(result).toBe('-1000000');
  });
});
