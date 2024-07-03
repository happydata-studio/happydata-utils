/**
 * Creates a promise that resolves after a specified number of milliseconds.
 * This function can be used to introduce delays in asynchronous operations.
 *
 * @param {number} ms - The number of milliseconds to wait before resolving the promise.
 * @returns {Promise<void>} - A promise that resolves after the specified delay.
 */
export function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
