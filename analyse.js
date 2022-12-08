export default function analyseArray(input) {
  return {
    average: input.reduce((prev, cur) => prev + cur, 0) / input.length,
    min: Math.min(...input),
    max: Math.max(...input),
    length: input.length,
}
}