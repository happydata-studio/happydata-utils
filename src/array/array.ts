/**
 * Flattens a two-dimensional array into a one-dimensional array.
 *
 * @param {T[][]} array - The two-dimensional array to flatten.
 * @returns {T[]} - The flattened one-dimensional array.
 */
export const flatten = <T>(array: T[][]): T[] => {
  return array.reduce((acc, val) => acc.concat(val), []);
};

/**
 * Removes duplicate elements from an array.
 *
 * @param {T[]} array - The array from which to remove duplicates.
 * @returns {T[]} - A new array with only unique elements.
 */
export const unique = <T>(array: T[]): T[] => {
  return [...new Set(array)];
};
