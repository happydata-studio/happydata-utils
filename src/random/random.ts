/**
 * Generates a random integer between 0 (inclusive) and the specified upper bound (exclusive).
 *
 * @param {number} [ubound=1000000000000] - The upper bound for the random number generation.
 * @returns {number} - A random integer between 0 and ubound.
 */
export function random(ubound: number = 1000000000000): number {
  return Math.floor(Math.random() * ubound);
}

/**
 * Generates a random alphanumeric string of the specified length.
 *
 * @param {number} [size=10] - The length of the generated string.
 * @returns {string} - A random alphanumeric string of the specified length.
 */
export function randomString(size: number = 10): string {
  const alphaChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let generatedString = '';
  for (let i = 0; i < size; i++) {
    generatedString += alphaChars[random(alphaChars.length)];
  }
  return generatedString;
}

export function randomRange(min: number, max: number): number {
  if (min > max) {
    throw new Error('Minimum value cannot be greater than maximum value');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
