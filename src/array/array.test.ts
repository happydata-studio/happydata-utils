import { unique, flatten } from './array';

describe('arrayUtils', () => {
  test('unique removes duplicates from array', () => {
    expect(unique([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  test('flatten flattens a 2D array', () => {
    expect(flatten([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]);
  });
});