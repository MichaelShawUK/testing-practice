import analyseArray from './analyse.js';

test('Retuns average for 2 element array', () => {
  expect(analyseArray([8, 4])).toMatchObject({ average: 6 });
})

test('Returns average as 7 from [3, 7, 12, 6]', () => {
  expect(analyseArray([3, 7, 12, 6])).toMatchObject({ average: 7 });
})

test('Returns 1 as minimum from [4, 8, 1, 5]', () => {
  expect(analyseArray([4, 8, 1, 5])).toMatchObject({ min: 1 });
})

test('Returns 11 as maximum from [4, 11, 2, 6, 7]', () => {
  expect(analyseArray([4, 11, 2, 6, 7])).toMatchObject({ max: 11 });
})

test('Returns length of input array', () => {
  expect(analyseArray([4, 7, 2, 76, 2, 1, 9])).toMatchObject({ length: 7 });
})

test('All properties correct for given array', () => {
  expect(analyseArray([7, 3, 14, 2, 4])).toMatchObject({
                                                          average: 6,
                                                          min: 2,
                                                          max: 14,
                                                          length: 5
  })
})