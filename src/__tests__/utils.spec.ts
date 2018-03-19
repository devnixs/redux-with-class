import { isPlainObject } from '../utils';

describe(`isPlainObject`, () => {
  beforeEach(() => {});

  it(`should return true for plain objects`, () => {
    const actual = isPlainObject({});
    const expected = true;

    expect(actual).toBe(expected);
  });

  it(`should return false for classes`, () => {
    class Test {}

    const actual = isPlainObject(new Test());
    const expected = false;

    expect(actual).toBe(expected);
  });
});
