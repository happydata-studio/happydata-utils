import { ordinal } from './ordinal'

describe('ordinal', () => {
  it('should return an empty string for falsy values', () => {
    expect(ordinal(null)).toBe('');
    expect(ordinal(undefined)).toBe('');
    expect(ordinal(0)).toBe('0th');
    expect(ordinal('')).toBe('');
  });

  it('should return the correct ordinal for 1', () => {
    expect(ordinal(1)).toBe('1st');
    expect(ordinal('1')).toBe('1st');
  });

  it('should return the correct ordinal for 2', () => {
    expect(ordinal(2)).toBe('2nd');
    expect(ordinal('2')).toBe('2nd');
  });

  it('should return the correct ordinal for 3', () => {
    expect(ordinal(3)).toBe('3rd');
    expect(ordinal('3')).toBe('3rd');
  });

  it('should return the correct ordinal for numbers ending in 1 but not 11', () => {
    expect(ordinal(21)).toBe('21st');
    expect(ordinal(31)).toBe('31st');
    expect(ordinal(101)).toBe('101st');
  });

  it('should return the correct ordinal for numbers ending in 2 but not 12', () => {
    expect(ordinal(22)).toBe('22nd');
    expect(ordinal(32)).toBe('32nd');
    expect(ordinal(102)).toBe('102nd');
  });

  it('should return the correct ordinal for numbers ending in 3 but not 13', () => {
    expect(ordinal(23)).toBe('23rd');
    expect(ordinal(33)).toBe('33rd');
    expect(ordinal(103)).toBe('103rd');
  });

  it('should return the correct ordinal for numbers ending in 11, 12, and 13', () => {
    expect(ordinal(11)).toBe('11th');
    expect(ordinal(12)).toBe('12th');
    expect(ordinal(13)).toBe('13th');
    expect(ordinal(111)).toBe('111th');
    expect(ordinal(112)).toBe('112th');
    expect(ordinal(113)).toBe('113th');
  });

  it('should return the correct ordinal for other numbers', () => {
    expect(ordinal(4)).toBe('4th');
    expect(ordinal(10)).toBe('10th');
    expect(ordinal(20)).toBe('20th');
    expect(ordinal(100)).toBe('100th');
  });

  it('should handle non-numeric string inputs gracefully', () => {
    expect(ordinal('abc')).toBe('NaNth');
  });
});
