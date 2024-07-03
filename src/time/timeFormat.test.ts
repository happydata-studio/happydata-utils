import { timeFormat, timeZoneAbbreviations } from './timeFormat';

describe('timeFormat', () => {
  it('should handle invalid date input gracefully', () => {
    const invalidDate = new Date('invalid date string');
    expect(timeFormat(invalidDate, 'short')).toBe("Invalid Date");
  });

  it('should format short time correctly', () => {
    const date = new Date('2024-07-02T12:34:00');
    expect(timeFormat(date, 'short')).toMatch(/^\d{1,2}[ap]m$/);
  });

  it('should format medium time correctly', () => {
    const date = new Date('2024-07-02T12:34:00');
    expect(timeFormat(date, 'medium')).toMatch(/^\d{1,2}:\d{2}[ap]m$/);
  });

  it('should format long time correctly', () => {
    const date = new Date('2024-07-02T12:34:00');
    expect(timeFormat(date, 'long')).toMatch(/^\d{1,2}:\d{2} [AP]M$/);
  });

  it('should format full time correctly and replace timezone with abbreviation', () => {
    const date = new Date('2024-07-02T12:34:00');
    const formattedTime = timeFormat(date, 'full', 'en-US');

    // Check if the formatted time includes one of the known abbreviations
    const abbreviations = Object.values(timeZoneAbbreviations);
    const hasAbbreviation = abbreviations.some(abbr => formattedTime.includes(abbr));

    expect(hasAbbreviation).toBe(true);
  });


  it("should pass format full with bad time", ()=>{
    //@ts-ignore
    const date = timeFormat(new Date(), undefined);
    expect(date).toBeTruthy();
  });

  it('should handle dates with no time part', () => {
    const date = new Date('2024-07-02');
    expect(timeFormat(date, 'full')).toBeDefined();
  });
});
