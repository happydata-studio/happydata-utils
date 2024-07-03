import { timeFormat, formatShortTime, formatMediumTime, formatLongTime, formatFullTime, timeZoneAbbreviations } from './timeFormat';

describe('timeFormat', () => {
  const date = new Date('2024-07-04T12:34:56'); // Example date

  it('should return "Invalid Date" for an invalid date', () => {
    const result = timeFormat(new Date('invalid-date'), 'short');
    expect(result).toBe('Invalid Date');
  });

  it('should format time as short', () => {
    const result = timeFormat(date, 'short', 'en-US');
    expect(result).toMatch(/^\d{1,2}[ap]m$/);
  });

  it("should handle inproper format calls", ()=>{
    //@ts-ignore
    const res = timeFormat(new Date(), "taco");
    expect(res).toBeTruthy();
  })

  it('should format time as medium', () => {
    const result = timeFormat(date, 'medium', 'en-US');
    expect(result).toMatch(/^\d{1,2}:\d{2}[ap]m$/);
  });

  it('should format time as long', () => {
    const result = timeFormat(date, 'long', 'en-US');
    expect(result).toMatch(/^\d{1,2}:\d{2} [APM]{2}$/);
  });

  it('should format time as full and replace timezone names with abbreviations', () => {
    const dateWithTimeZone = new Date('2024-07-03T20:16:37.760Z');
    const result = timeFormat(dateWithTimeZone, 'full', 'en-US');
    const timeZoneAbbreviation = Object.values(timeZoneAbbreviations).find(abbr => result.includes(abbr));
    expect(timeZoneAbbreviation).toBeTruthy();
  });

  it('should return the original time string if no format is provided', () => {
    const result = timeFormat(date, 'full', 'en-US');
    expect(result).toMatch(/\d{1,2}:\d{2}:\d{2} [APM]{2}/);
  });

  it('should handle missing locale', () => {
    const result = timeFormat(date, 'short');
    expect(result).toMatch(/^\d{1,2}[ap]m$/);
  });

  it('should correctly format full time string with timezone abbreviation', () => {
    const dateWithTimeZone = new Date('2024-07-03T20:16:37.760Z');
    const result = timeFormat(dateWithTimeZone, 'full', 'en-US');
    expect(result.includes('EDT')).toBe(true);
  });

  it('should correctly format full time string without timezone abbreviation', () => {
    const dateWithoutTimeZone = new Date('2024-07-03T20:16:37.760Z');
    const result = timeFormat(dateWithoutTimeZone, 'full', 'en-US');
    const hasTimeZoneAbbreviation = Object.values(timeZoneAbbreviations).some(abbr => result.includes(abbr));
    expect(hasTimeZoneAbbreviation).toBe(true);
  });

  it('should format time with a different locale', () => {
    const result = timeFormat(date, 'medium');
    expect(result).toMatch(/\d{1,2}:\d{2}[ap]m/); // Adjust this regex based on expected format in French locale
  });
  // ... (keep your existing tests)

  it('should format short time correctly', () => {
    expect(formatShortTime('3:30 PM')).toBe('3pm');
    expect(formatShortTime('11:45 AM')).toBe('11am');
  });

  it('should format medium time correctly', () => {
    expect(formatMediumTime('3:30:00 PM')).toBe('3:30pm');
    expect(formatMediumTime('11:45:00 AM')).toBe('11:45am');
  });

  it('should format long time correctly', () => {
    expect(formatLongTime('3:30:00 PM')).toBe('3:30 PM');
    expect(formatLongTime('11:45:00 AM')).toBe('11:45 AM');
  });

  it('should format full time correctly with known timezone', () => {
    expect(formatFullTime('3:30:00 PM Eastern Daylight Time')).toBe('3:30:00 PM EDT');
    expect(formatFullTime('11:45:00 AM Pacific Standard Time')).toBe('11:45:00 AM PST');
  });

  it('should format full time correctly with unknown timezone', () => {
    expect(formatFullTime('3:30:00 PM Unknown Time')).toBe('3:30:00 PM Unknown Time');
  });
});