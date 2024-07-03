import { secondsToString } from './secondsToString';

describe('secondsToString', () => {
  it('should return "0m 0s" when input is 0', () => {
    expect(secondsToString(0)).toBe("0m 0s");
  });

  it('should return "0m 0s" when input is negative', () => {
    expect(secondsToString(-5)).toBe("0m 0s");
  });

  it('should convert seconds to minutes and seconds correctly when less than an hour', () => {
    expect(secondsToString(60)).toBe("1m 0s");
    expect(secondsToString(90)).toBe("1m 30s");
    expect(secondsToString(59)).toBe("0m 59s");
    expect(secondsToString(61)).toBe("1m 1s");
  });

  it('should convert seconds to hours, minutes, and seconds correctly when more than an hour', () => {
    expect(secondsToString(3600)).toBe("1h 0m 0s");
    expect(secondsToString(3665)).toBe("1h 1m 5s");
    expect(secondsToString(7325)).toBe("2h 2m 5s");
  });

  it('should handle edge cases correctly', () => {
    expect(secondsToString(1)).toBe("0m 1s");
    expect(secondsToString(59)).toBe("0m 59s");
    expect(secondsToString(61)).toBe("1m 1s");
    expect(secondsToString(3599)).toBe("59m 59s");
  });
});