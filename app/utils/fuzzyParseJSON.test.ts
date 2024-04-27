import { fuzzyParseJSON } from './fuzzyParseJSON';

describe(fuzzyParseJSON.name, () => {
  it('parses valid JSON correctly', () => {
    const jsonString = '{"key": "value", "number": 123}';
    const result = fuzzyParseJSON(jsonString);
    expect(result).toEqual({ key: 'value', number: 123 });
  });

  it('returns undefined for invalid JSON', () => {
    const jsonString = '{key: "value", "number": 123}';
    const result = fuzzyParseJSON(jsonString);
    expect(result).toBeUndefined();
  });

  it('handles nested objects and arrays', () => {
    const jsonString = '{"nested": {"array": [1, 2, {"deep": "value"}]}}';
    const result = fuzzyParseJSON(jsonString);
    expect(result).toEqual({ nested: { array: [1, 2, { deep: 'value' }] } });
  });

  it('attempts to parse missing brackets for incomplete JSON', () => {
    const jsonString = '{"key": "value"';
    const result = fuzzyParseJSON(jsonString);
    expect(result).toEqual({ key: 'value' });
  });

  it('handles escaped characters within strings', () => {
    const jsonString = '{"escaped": "a string with a \\"quote\\" inside"}';
    const result = fuzzyParseJSON(jsonString);
    expect(result).toEqual({ escaped: 'a string with a "quote" inside' });
  });

  it('returns undefined for malformed JSON with unbalanced brackets', () => {
    const jsonString = '{"key": "value", "array": [1, 2, 3}';
    const result = fuzzyParseJSON(jsonString);
    expect(result).toBeUndefined();
  });

  it('returns undefined for empty input', () => {
    const result = fuzzyParseJSON('');
    expect(result).toBeUndefined();
  });

  it('parses strings with less typical characters < and >', () => {
    const jsonString = '{"key": "<value>"}';
    const result = fuzzyParseJSON(jsonString);
    expect(result).toEqual({ key: '<value>' });
  });
});
