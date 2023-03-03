import { quickSort } from '../utils/quickSort.js'

describe('Test for quickSort function', () => {
  const arr = [7, 9, 0, 3, 7, -4, 6, 3, -2];

  it('Should return sorted array', () => {
    expect(quickSort(arr)).toEqual([-4, -2, 0, 3, 3, 6, 7, 7, 9]);
    expect(quickSort([])).toEqual([]);
    expect(quickSort([2])).toEqual([2]);
  }),

  it('Should process incorrect values', () => {
    expect(quickSort('word')).toBe('Incorrect value');
    expect(quickSort(15)).toBe('Incorrect value');
  })
});
