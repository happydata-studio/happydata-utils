export const is = {
  array: (value: any): boolean => Array.isArray(value),
  date: (value: any): boolean => value instanceof Date && !isNaN(value.getTime()),
  error: (value: any): boolean => value instanceof Error,
  function: (value: any): boolean => typeof value === 'function',
  nan: (value: any): boolean => isNaN(value),
  null: (value: any): boolean => value === null,
  number: (value: any): boolean => typeof value === 'number' && !isNaN(value),
  object: (value: any): boolean => value !== null && typeof value === 'object' && !Array.isArray(value),
  json: (value: any): boolean => {
      try {
          JSON.parse(value);
          return true;
      } catch {
          return false;
      }
  },
  regexp: (value: any): boolean => value instanceof RegExp,
  string: (value: any): boolean => typeof value === 'string',
  char: (value: any): boolean => typeof value === 'string' && value.length === 1,
  undefined: (value: any): boolean => value === undefined,
  existy: (value: any): boolean => value != null,
  truthy: (value: any): boolean => !!value,
  falsy: (value: any): boolean => !value,
  url: (value: string): boolean => /^https?:\/\/[^\s$.?#].[^\s]*$/.test(value),
  email: (value: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  creditCard: (value: string): boolean => /^[0-9]{13,19}$/.test(value.replace(/\D/g, '')),
  alphaNumeric: (value: string): boolean => /^[a-z0-9]+$/i.test(value),
  timeString: (value: string): boolean => /^([01]\d|2[0-3]):?([0-5]\d)$/.test(value),
  dateString: (value: string): boolean => !isNaN(Date.parse(value)),
  usZipCode: (value: string): boolean => /^\d{5}(-\d{4})?$/.test(value),
  caPostalCode: (value: string): boolean => /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/.test(value),
  ukPostCode: (value: string): boolean => /^[A-Z]{1,2}\d[A-Z\d]? \d[A-Z]{2}$/.test(value),
  nanpPhone: (value: string): boolean => /^(\+?1)?\d{10}$/.test(value.replace(/\D/g, '')),
  eppPhone: (value: string): boolean => /^\+\d{1,3}\.\d{1,14}(?:x.+)?$/.test(value),
  socialSecurityNumber: (value: string): boolean => /^\d{3}-\d{2}-\d{4}$/.test(value),
  hexColor: (value: string): boolean => /^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(value),
  ip: (value: string): boolean => is.ipv4(value) || is.ipv6(value),
  ipv4: (value: string): boolean => /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/.test(value),
  ipv6: (value: string): boolean => /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/.test(value),
  even: (value: number): boolean => value % 2 === 0,
  odd: (value: number): boolean => value % 2 !== 0,
  positive: (value: number): boolean => value > 0,
  negative: (value: number): boolean => value < 0,
  above: (value: number, min: number): boolean => value > min,
  under: (value: number, max: number): boolean => value < max,
  within: (value: number, min: number, max: number): boolean => value >= min && value <= max,
  decimal: (value: number): boolean => value % 1 !== 0,
  integer: (value: number): boolean => Number.isInteger(value),
  finite: (value: number): boolean => Number.isFinite(value),
  infinite: (value: number): boolean => !Number.isFinite(value),
  Time: (value: any): boolean => value instanceof Date,
  today: (value: any): boolean => {
      const today = new Date();
      return is.date(value) && value.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0);
  },
  yesterday: (value: any): boolean => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      return is.date(value) && value.setHours(0, 0, 0, 0) === yesterday.setHours(0, 0, 0, 0);
  },
  tomorrow: (value: any): boolean => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return is.date(value) && value.setHours(0, 0, 0, 0) === tomorrow.setHours(0, 0, 0, 0);
  },
  past: (value: any): boolean => is.date(value) && value.getTime() < Date.now(),
  future: (value: any): boolean => is.date(value) && value.getTime() > Date.now()
};