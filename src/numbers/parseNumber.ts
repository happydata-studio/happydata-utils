/**
 * Parses a number or string to a number with up to two decimal places.
 *
 * @param {number | string} value - The value to be parsed. It can be either a number or a string.
 * @returns {number} - The parsed number rounded to two decimal places. Returns NaN if the input is not a valid number or string.
 *
 * @example
 * parseNumber(123.456); // returns 123.46
 * parseNumber("123.456"); // returns 123.46
 * parseNumber("123"); // returns 123.00
 * parseNumber("abc"); // returns NaN
 */
export const parseNumber = (value: number | string): number => {
  if (typeof value === 'number') {
    return Math.round(100 * value) / 100;
  }

  if (typeof value === 'string') {
    const parsedValue = value.includes('.') ? parseFloat(value) : parseInt(value, 10);
    return Math.round(100 * parsedValue) / 100;
  }

  return NaN;
}
