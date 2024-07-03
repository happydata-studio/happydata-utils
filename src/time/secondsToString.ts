/**
 * Converts a given number of seconds into a human-readable string format.
 * The format will be in hours, minutes, and seconds (e.g., "1h 2m 3s").
 * If the input is zero or negative, it returns "0m 0s".
 *
 * @param {number} seconds - The number of seconds to convert.
 * @returns {string} - The formatted time string.
 */
export function secondsToString(seconds: number): string {
  if (seconds <= 0) {
    return "0m 0s";
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours ? `${hours}h ` : ``}${minutes}m ${remainingSeconds}s`;
}
