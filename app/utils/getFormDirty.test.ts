import { getFormDirty } from './getFormDirty';

describe(getFormDirty.name, () => {
  it('Returns an object with only the truthy keys in the reference object', () => {
    const obj = { k1: 1, k2: 2 };
    const ref = { k1: true };

    const expected = { k1: 1 };

    const result = getFormDirty(obj, ref);
    expect(result).toEqual(expected);
  });

  it('Handles nested objects', () => {
    const obj = {
      k1: 1,
      k2: 2,
      k3: {
        k4: 4,
        k5: {},
        k6: {
          k7: 7,
        },
      },
    };
    const ref = {
      k1: true,
      k3: {
        k4: true,
        k6: {
          k7: true,
        },
      },
    };

    const expected = {
      k1: 1,
      k3: {
        k4: 4,
        k6: {
          k7: 7,
        },
      },
    };

    const result = getFormDirty(obj, ref);
    expect(result).toEqual(expected);
  });

  it('Only gets a deeply nested value', () => {
    const obj = {
      k1: 1,
      k2: 2,
      k3: {
        k4: 4,
        k5: {},
        k6: {
          k7: 7,
        },
      },
    };
    const ref = {
      k3: {
        k6: {
          k7: true,
        },
      },
    };

    const expected = {
      k3: {
        k6: {
          k7: 7,
        },
      },
    };

    const result = getFormDirty(obj, ref);
    expect(result).toEqual(expected);
  });

  it('Handles empty or invalid reference objects', () => {
    const expected = {};

    expect(getFormDirty({}, {})).toEqual(expected);
    expect(getFormDirty({}, { k1: false })).toEqual(expected);
    expect(getFormDirty({ k1: 1 }, {})).toEqual(expected);
  });
});
