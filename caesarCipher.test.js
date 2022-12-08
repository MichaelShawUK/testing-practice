import caesarCipher from './caesarCipher.js';

test('"Attack" with key of 1 returns Buubdl', () => {
  expect(caesarCipher('Attack', 1)).toBe('Buubdl');
})

test('Ignores punctuation and spaces', () => {
  expect(caesarCipher('Light the beacons!!', 2)).toBe('Nkijv vjg dgceqpu!!');
})

test('Wraps for lower-case letters', () => {
  expect(caesarCipher('wxyz', 3)).toBe('zabc');
})

test('Wraps for upper-case letters', () => {
  expect(caesarCipher('YZAB', 5)).toBe('DEFG');
})