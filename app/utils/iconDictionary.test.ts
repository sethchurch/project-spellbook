import { iconDictionary } from './iconDictionary';

describe('Icon Dictionary', () => {
  it('returns a valid Icon component for every key', () => {
    const icons = Object.keys(iconDictionary);
    for (const icon of icons) {
      const component = iconDictionary[icon];
      expect(component).toBeTypeOf('object');
    }
  });
});
