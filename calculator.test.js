import { calculator } from './calculator.js';

const calculate = calculator();

test('5 + 2 equals 7', () => {
  expect(calculate.add(5, 2)).toBe(7);
})

test('Sums 2 negative numbers', () => {
  expect(calculate.add(-4, -11)).toBe(-15);
})

test('8 - 3 equals 5', () => {
  expect(calculate.subtract(8, 3)).toBe(5);
})

test('Subtract negative from positive', () => {
  expect(calculate.subtract(6, -3)).toBe(9);
})

test('7 * 3 equals 21', () => {
  expect(calculate.multiply(7, 3)).toBe(21);
})

test('Multiply by a negative number', () => {
  expect(calculate.multiply(11, -4)).toBe(-44);
})

test('15 / 5 equals 3', () => {
  expect(calculate.divide(15, 5)).toBe(3);
})

test('Throws error when dividing by 0', () => {
  expect(() => {
    calculate.divide(12, 0);
  }).toThrow('Cannot divide by zero');
})