// is.test.js

import { is } from "./is";


describe("is tests", ()=>{
  test('is.array', () => {
    expect(is.array([])).toBe(true);
    expect(is.array('not an array')).toBe(false);
  });

  test('is.date', () => {
    expect(is.date(new Date())).toBe(true);
    expect(is.date('not a date')).toBe(false);
  });

  test('is.error', () => {
    expect(is.error(new Error())).toBe(true);
    expect(is.error('not an error')).toBe(false);
  });

  test('is.function', () => {
    expect(is.function(() => {})).toBe(true);
    expect(is.function('not a function')).toBe(false);
  });

  test('is.nan', () => {
    expect(is.nan(NaN)).toBe(true);
    expect(is.nan(123)).toBe(false);
  });

  test('is.null', () => {
    expect(is.null(null)).toBe(true);
    expect(is.null('not null')).toBe(false);
  });

  test('is.number', () => {
    expect(is.number(123)).toBe(true);
    expect(is.number(NaN)).toBe(false);
  });

  test('is.object', () => {
    expect(is.object({})).toBe(true);
    expect(is.object(null)).toBe(false);
    expect(is.object([])).toBe(false);
  });

  test('is.json', () => {
    expect(is.json('{"valid": "json"}')).toBe(true);
    expect(is.json('invalid json')).toBe(false);
  });

  test('is.regexp', () => {
    expect(is.regexp(/abc/)).toBe(true);
    expect(is.regexp('not a regexp')).toBe(false);
  });

  test('is.string', () => {
    expect(is.string('string')).toBe(true);
    expect(is.string(123)).toBe(false);
  });

  test('is.char', () => {
    expect(is.char('a')).toBe(true);
    expect(is.char('abc')).toBe(false);
  });

  test('is.undefined', () => {
    expect(is.undefined(undefined)).toBe(true);
    expect(is.undefined('defined')).toBe(false);
  });

  test('is.existy', () => {
    expect(is.existy(null)).toBe(false);
    expect(is.existy(undefined)).toBe(false);
    expect(is.existy('value')).toBe(true);
  });

  test('is.truthy', () => {
    expect(is.truthy(true)).toBe(true);
    expect(is.truthy(1)).toBe(true);
    expect(is.truthy(false)).toBe(false);
  });

  test('is.falsy', () => {
    expect(is.falsy(false)).toBe(true);
    expect(is.falsy(0)).toBe(true);
    expect(is.falsy(true)).toBe(false);
  });

  test('is.url', () => {
    expect(is.url('http://example.com')).toBe(true);
    expect(is.url('invalid url')).toBe(false);
  });

  test('is.email', () => {
    expect(is.email('test@example.com')).toBe(true);
    expect(is.email('invalid email')).toBe(false);
  });

  test('is.creditCard', () => {
    expect(is.creditCard('4111111111111111')).toBe(true);
    expect(is.creditCard('invalid credit card')).toBe(false);
  });

  test('is.alphaNumeric', () => {
    expect(is.alphaNumeric('abc123')).toBe(true);
    expect(is.alphaNumeric('abc123!')).toBe(false);
  });

  test('is.timeString', () => {
    expect(is.timeString('23:59')).toBe(true);
    expect(is.timeString('invalid time')).toBe(false);
  });

  test('is.dateString', () => {
    expect(is.dateString('2023-01-01')).toBe(true);
    expect(is.dateString('invalid date')).toBe(false);
  });

  test('is.usZipCode', () => {
    expect(is.usZipCode('12345')).toBe(true);
    expect(is.usZipCode('invalid zip')).toBe(false);
  });

  test('is.caPostalCode', () => {
    expect(is.caPostalCode('K1A 0B1')).toBe(true);
    expect(is.caPostalCode('invalid postal')).toBe(false);
  });

  test('is.ukPostCode', () => {
    expect(is.ukPostCode('EC1A 1BB')).toBe(true);
    expect(is.ukPostCode('invalid postal')).toBe(false);
  });

  test('is.nanpPhone', () => {
    expect(is.nanpPhone('1234567890')).toBe(true);
    expect(is.nanpPhone('invalid phone')).toBe(false);
  });

  test('is.eppPhone', () => {
    expect(is.eppPhone('+1.1234567890')).toBe(true);
    expect(is.eppPhone('invalid phone')).toBe(false);
  });

  test('is.socialSecurityNumber', () => {
    expect(is.socialSecurityNumber('123-45-6789')).toBe(true);
    expect(is.socialSecurityNumber('invalid ssn')).toBe(false);
  });

  test('is.hexColor', () => {
    expect(is.hexColor('#FFFFFF')).toBe(true);
    expect(is.hexColor('invalid color')).toBe(false);
  });

  test('is.ip', () => {
    expect(is.ip('127.0.0.1')).toBe(true);
    expect(is.ip('invalid ip')).toBe(false);
  });

  test('is.ipv4', () => {
    expect(is.ipv4('127.0.0.1')).toBe(true);
    expect(is.ipv4('invalid ip')).toBe(false);
  });

  test('is.ipv6', () => {
    expect(is.ipv6('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).toBe(true);
    expect(is.ipv6('invalid ip')).toBe(false);
  });

  test('is.even', () => {
    expect(is.even(2)).toBe(true);
    expect(is.even(3)).toBe(false);
  });

  test('is.odd', () => {
    expect(is.odd(3)).toBe(true);
    expect(is.odd(2)).toBe(false);
  });

  test('is.positive', () => {
    expect(is.positive(1)).toBe(true);
    expect(is.positive(-1)).toBe(false);
  });

  test('is.negative', () => {
    expect(is.negative(-1)).toBe(true);
    expect(is.negative(1)).toBe(false);
  });

  test('is.above', () => {
    expect(is.above(10, 5)).toBe(true);
    expect(is.above(5, 10)).toBe(false);
  });

  test('is.under', () => {
    expect(is.under(5, 10)).toBe(true);
    expect(is.under(10, 5)).toBe(false);
  });

  test('is.within', () => {
    expect(is.within(5, 1, 10)).toBe(true);
    expect(is.within(11, 1, 10)).toBe(false);
  });

  test('is.decimal', () => {
    expect(is.decimal(1.5)).toBe(true);
    expect(is.decimal(2)).toBe(false);
  });

  test('is.integer', () => {
    expect(is.integer(2)).toBe(true);
    expect(is.integer(2.5)).toBe(false);
  });

  test('is.finite', () => {
    expect(is.finite(100)).toBe(true);
    expect(is.finite(Infinity)).toBe(false);
  });

  test('is.infinite', () => {
    expect(is.infinite(Infinity)).toBe(true);
    expect(is.infinite(100)).toBe(false);
  });
  

  test('is.Time', () => {
    expect(is.Time(new Date())).toBe(true);
    expect(is.Time('not a date')).toBe(false);
  });

  test('is.today', () => {
    const today = new Date();
    expect(is.today(today)).toBe(true);
    today.setDate(today.getDate() - 1);
    expect(is.today(today)).toBe(false);
  });

  test('is.yesterday', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    expect(is.yesterday(yesterday)).toBe(true);
    yesterday.setDate(yesterday.getDate() + 1);
    expect(is.yesterday(yesterday)).toBe(false);
  });

  test('is.tomorrow', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    expect(is.tomorrow(tomorrow)).toBe(true);
    tomorrow.setDate(tomorrow.getDate() - 1);
    expect(is.tomorrow(tomorrow)).toBe(false);
  });

  test('is.past', () => {
    const past = new Date(2000, 0, 1);
    expect(is.past(past)).toBe(true);
    const future = new Date(3000, 0, 1);
    expect(is.past(future)).toBe(false);
  });

  test('is.future', () => {
    const past = new Date(2000, 0, 1);
    expect(is.future(past)).toBe(false);
    const future = new Date(3000, 0, 1);
    expect(is.future(future)).toBe(true);
  });

});