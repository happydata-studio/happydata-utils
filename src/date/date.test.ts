import { dateFormat } from "./date";

const date = new Date('2024-06-28T13:14:18.684Z');


describe('Date Utils', () => {
  test('Format Date', () => {
    expect(dateFormat(date, 'tiny')).toBe("06/28");
    expect(dateFormat(date, 'small')).toBe("06/28/2024");
    expect(dateFormat(date, 'base')).toBe("Jun 28, 2024");
    expect(dateFormat(date, 'large')).toBe("Friday, June 28, 2024");
  });
  test('Format Date with ', () => {
    expect(dateFormat(date, 'tiny', "en-GB")).toBe("28/06");
    expect(dateFormat(date, 'small', "en-GB")).toBe("28/06/2024");
    expect(dateFormat(date, 'base', "en-GB")).toBe("28 Jun 2024");
    expect(dateFormat(date, 'large', "en-GB")).toBe("Friday 28 June 2024");
  });
});

