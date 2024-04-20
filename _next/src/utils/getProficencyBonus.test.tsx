import { getProficencyBonus } from './getProficencyBonus';

describe('getProficencyBonus', () => {
  it('should return proficiency bonus 2 for level less than 5', () => {
    expect(getProficencyBonus(4)).toBe(2);
  });

  it('should return proficiency bonus 3 for level between 5 and 8', () => {
    expect(getProficencyBonus(5)).toBe(3);
    expect(getProficencyBonus(6)).toBe(3);
    expect(getProficencyBonus(7)).toBe(3);
    expect(getProficencyBonus(8)).toBe(3);
  });

  it('should return proficiency bonus 4 for level between 9 and 12', () => {
    expect(getProficencyBonus(9)).toBe(4);
    expect(getProficencyBonus(10)).toBe(4);
    expect(getProficencyBonus(11)).toBe(4);
    expect(getProficencyBonus(12)).toBe(4);
  });

  it('should return proficiency bonus 5 for level between 13 and 16', () => {
    expect(getProficencyBonus(13)).toBe(5);
    expect(getProficencyBonus(14)).toBe(5);
    expect(getProficencyBonus(15)).toBe(5);
    expect(getProficencyBonus(16)).toBe(5);
  });

  it('should return proficiency bonus 6 for level 17 and above', () => {
    expect(getProficencyBonus(17)).toBe(6);
    expect(getProficencyBonus(18)).toBe(6);
    expect(getProficencyBonus(19)).toBe(6);
    expect(getProficencyBonus(20)).toBe(6);
  });
});
