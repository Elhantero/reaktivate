import isObject from '../shared/helpers/isObject';

describe('isObject', () => {
  it('isObject', () => {
    expect(isObject({})).toEqual(true);
    expect(isObject([])).toEqual(false);
    expect(isObject([1])).toEqual(false);
    expect(isObject('[]')).toEqual(false);
    expect(isObject(1)).toEqual(false);
    expect(isObject(NaN)).toEqual(false);
    expect(isObject(null)).toEqual(false);
    expect(isObject('')).toEqual(false);
    expect(isObject(() => {})).toEqual(false);
    expect(isObject(undefined)).toEqual(false);
    expect(isObject(false)).toEqual(false);
  });
});
