import {
  extractJSON,
  toCase
 } from './string';



describe('String JSON Utils', () => {

  test('extract Object JSON from a string', () => {
    const string = `Hello there friends { "name": "Brandon", "age": 1000 } this is a test...`;
    const json = extractJSON(string) as any;

    expect(json.name).toBe("Brandon")
    expect(json.age).toBe(1000)
    // expect(unique([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  test('extract Array JSON from a string', () => {
    const string = `Hello there friends

    [{"name": "Brandon", "age": 1000}, {"name": "Emily", "age": 1000}]

    this is a test...`;
    const json = extractJSON(string, "array") as any;

    expect(json[0].name).toBe("Brandon")
    expect(json[0].age).toBe(1000)
    expect(json[1].name).toBe("Emily")
    expect(json[1].age).toBe(1000)
    // expect(unique([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });
});


describe('String Conversion Functions', () => {
  describe('toCase.snake', () => {
    it('should convert a regular string to a variable name', () => {
      expect(toCase.snake('Hello World')).toBe('Hello_World');
    });

    it('should replace special characters with underscores', () => {
      expect(toCase.snake('Hello@World!')).toBe('Hello_World_');
    });

    it('should handle strings starting with a non-letter character', () => {
      expect(toCase.snake('1Hello World')).toBe('1Hello_World');
    });

    it('should return an empty string when given an empty string', () => {
      expect(toCase.snake('')).toBe('');
    });

    it('should use a custom spacer when provided', () => {
      expect(toCase.snake('Hello World', '-')).toBe('Hello-World');
    });
  });

  describe('toCase.title', () => {
    it('should convert a snake_case string to a display string', () => {
      expect(toCase.title('hello_world')).toBe('Hello World');
    });

    it('should handle single word strings', () => {
      expect(toCase.title('hello')).toBe('Hello');
    });

    it('should return an empty string when given an empty string', () => {
      expect(toCase.title('')).toBe('');
    });

    it('should handle strings with multiple underscores correctly', () => {
      expect(toCase.title('hello_world_again')).toBe('Hello World Again');
    });
  });
});
