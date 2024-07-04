export function stringToColor(str: string): string {
  // Generate a hash from the input string
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Convert the hash into a color
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xFF;
    // Adjust brightness and saturation
    const midValue = Math.round(value * 0.7 + 0.3 * 128).toString(16);
    color += midValue.padStart(2, '0');
  }
  return color;
}
