import { random, randomRange, randomString } from "./random";

describe('String JSON Utils', () => {

  test('extract Object JSON from a string', () => {
    
    const r = random();
    const s = randomString();
    expect(r).toBeTruthy();
    expect(s).toBeTruthy();

  });
  
});

describe('randomRange', () => {
  it('should return a number between the specified range', () => {
    const min = 1;
    const max = 100;
    for (let i = 0; i < 1000; i++) { // Run multiple times to ensure randomness
      const result = randomRange(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    }
  });

  it('should throw an error if min is greater than max', () => {
    expect(() => {
      randomRange(100, 1);
    }).toThrow('Minimum value cannot be greater than maximum value');
  });

  it('should return min if min and max are the same', () => {
    const min = 50;
    const max = 50;
    const result = randomRange(min, max);
    expect(result).toBe(min);
  });
});