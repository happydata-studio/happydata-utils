import { toCase } from './case';

describe('toCase', () => {
  test('title case', () => {
    expect(toCase.title('hello_world')).toBe('Hello World');
    expect(toCase.title('multiple_words_here')).toBe('Multiple Words Here');
  });

  test('snake case', () => {
    expect(toCase.snake('Hello World')).toBe('Hello_World');
    expect(toCase.snake('Hello World', '-')).toBe('Hello-World');
  });

  test('lower case', () => {
    expect(toCase.lower('Hello World')).toBe('hello world');
  });

  test('upper case', () => {
    expect(toCase.upper('Hello World')).toBe('HELLO WORLD');
  });

  test('screaming snake case', () => {
    expect(toCase.screamingSnake('Hello World')).toBe('HELLO_WORLD');
  });

  test('train case', () => {
    expect(toCase.train('hello world')).toBe('Hello-World');
    expect(toCase.train('multiple words here')).toBe('Multiple-Words-Here');
  });

  test('dot case', () => {
    expect(toCase.dot('Hello World')).toBe('hello.world');
  });

  test('pascal case', () => {
    expect(toCase.pascal('hello world')).toBe('HelloWorld');
    expect(toCase.pascal('multiple words here')).toBe('MultipleWordsHere');
  });

  test('camel case', () => {
    expect(toCase.camel('hello world')).toBe('helloWorld');
    expect(toCase.camel('multiple words here')).toBe('multipleWordsHere');
  });
});
