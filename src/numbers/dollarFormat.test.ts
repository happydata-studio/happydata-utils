import { dollarFormat } from './dollarFormat';

describe('dollarFormat', () => {
  it('formats USD correctly with default parameters', () => {
    expect(dollarFormat(1000)).toBe('$1,000.00');
    expect(dollarFormat(1234567.89)).toBe('$1,234,567.89');
    expect(dollarFormat(0.99)).toBe('$0.99');
    expect(dollarFormat(-1000)).toBe('-$1,000.00');
  });

  it('formats USD correctly with specified language', () => {
    expect(dollarFormat(1000, 'en-US')).toBe('$1,000.00');
    expect(dollarFormat(1000, 'de-DE')).toBe('1.000,00 $');
    expect(dollarFormat(1000, 'fr-FR')).toBe('1 000,00 $US');
  });

  it('formats other currencies correctly', () => {
    expect(dollarFormat(1000, 'en-US', 'EUR')).toBe('€1,000.00');
    expect(dollarFormat(1000, 'en-GB', 'GBP')).toBe('£1,000.00');
    expect(dollarFormat(1000, 'ja-JP', 'JPY')).toBe('￥1,000');
  });

  it('handles large numbers correctly', () => {
    expect(dollarFormat(1000000000)).toBe('$1,000,000,000.00');
  });

  it('handles small numbers correctly', () => {
    expect(dollarFormat(0.01)).toBe('$0.01');
    expect(dollarFormat(0.001)).toBe('$0.00');
  });

  it('handles negative numbers correctly', () => {
    expect(dollarFormat(-1234.56, 'en-US', 'USD')).toBe('-$1,234.56');
    expect(dollarFormat(-1234.56, 'de-DE', 'EUR')).toBe('-1.234,56 €');
  });

  it('handles zero correctly', () => {
    expect(dollarFormat(0)).toBe('$0.00');
  });

  it('throws an error for invalid currency', () => {
    expect(() => dollarFormat(1000, 'en-US', 'INVALID')).toThrow();
  });
});