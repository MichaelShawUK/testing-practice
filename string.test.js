import { capitalise, reverseString } from './string.js';

test('hello to return Hello', () => {
  expect(capitalise('hello')).toBe('Hello');
})

test('World to return World', () => {
  expect(capitalise('World')).toBe('World');
})

test('apple to return elppa', () => {
  expect(reverseString('apple')).toBe('elppa');
})