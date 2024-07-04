import { stringToColor } from "./stringToColor";

describe('stringToColor', () => {
  test('should return a valid color string', () => {
    const color = stringToColor('test');
    expect(color).toMatch(/^#[0-9a-fA-F]{6}$/);
  });

  test('should return the same color for the same input string', () => {
    const color1 = stringToColor('consistent');
    const color2 = stringToColor('consistent');
    expect(color1).toBe(color2);
  });

  test('should return different colors for different input strings', () => {
    const color1 = stringToColor('string1');
    const color2 = stringToColor('string2');
    expect(color1).not.toBe(color2);
  });

  test('should handle empty string input', () => {
    const color = stringToColor('');
    expect(color).toMatch(/^#[0-9a-fA-F]{6}$/);
  });

  test('should generate a color for a very long string', () => {
    const longString = 'a'.repeat(1000);
    const color = stringToColor(longString);
    expect(color).toMatch(/^#[0-9a-fA-F]{6}$/);
  });
});