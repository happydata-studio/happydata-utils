import { slugify } from './slugify';

describe('slugify', () => {
  test('should convert a string to lowercase and replace spaces and special characters with hyphens', () => {
    expect(slugify('Hello World! This is a test.')).toBe('hello-world-this-is-a-test');
  });

  test('should trim leading and trailing whitespace before processing', () => {
    expect(slugify('   Hello World   ')).toBe('hello-world');
  });

  test('should handle strings with multiple spaces and special characters correctly', () => {
    expect(slugify('Hello    World!!!')).toBe('hello-world');
    expect(slugify('Hello-World')).toBe('hello-world');
  });

  test('should not add hyphens for an empty string', () => {
    expect(slugify('')).toBe('');
  });

  test('should handle strings with only special characters', () => {
    expect(slugify('@@@$$$%%%')).toBe('');
  });

  test('should handle strings with leading and trailing hyphens after processing', () => {
    expect(slugify('---Hello World---')).toBe('hello-world');
  });
});
