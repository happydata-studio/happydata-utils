import { parseNumber } from './parseNumber';

describe('parseNumber', () => {
  it('should correctly parse and round a number input', () => {
    expect(parseNumber(123.456)).toBe(123.46);
    expect(parseNumber(123.454)).toBe(123.45);
    expect(parseNumber(0)).toBe(0);
    expect(parseNumber(-123.456)).toBe(-123.46);
  });

  it('should correctly parse and round a string input with decimal', () => {
    expect(parseNumber('123.456')).toBe(123.46);
    expect(parseNumber('123.454')).toBe(123.45);
    expect(parseNumber('0.00')).toBe(0);
    expect(parseNumber('-123.456')).toBe(-123.46);
  });

  it('should correctly parse and round a string input without decimal', () => {
    expect(parseNumber('123')).toBe(123);
    expect(parseNumber('0')).toBe(0);
    expect(parseNumber('-123')).toBe(-123);
  });

  it('should return NaN for invalid string input', () => {
    expect(parseNumber('abc')).toBeNaN();
    expect(parseNumber('123abc')).toBe(123);
    expect(parseNumber('')).toBeNaN();
  });

  it('should return NaN for non-number and non-string input', () => {
    expect(parseNumber(null as any)).toBeNaN();
    expect(parseNumber(undefined as any)).toBeNaN();
    expect(parseNumber({} as any)).toBeNaN();
    expect(parseNumber([] as any)).toBeNaN();
  });
});
