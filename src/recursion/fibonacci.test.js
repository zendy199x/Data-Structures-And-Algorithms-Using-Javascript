import { fibonacciLoop, fibonacciRecursion } from './fibonacci';

describe('fibonacciLoop(n)', () => {
  it('should return 0 when n not an number', () => {
    expect(fibonacciLoop('')).toBe(0);
    expect(fibonacciLoop({})).toBe(0);
    expect(fibonacciLoop(null)).toBe(0);
    expect(fibonacciLoop(undefined)).toBe(0);
  });
  it('should return correct fibonacci number', () => {
    [0, 1, 1, 2, 3, 5, 8, 13, 21, 34].forEach((result, n) => {
      expect(fibonacciLoop(n)).toBe(result);
    });
  });
});

describe('fibonacciRecursion(n)', () => {
  it('should return 0 when n not an number', () => {
    expect(fibonacciRecursion('')).toBe(0);
    expect(fibonacciRecursion({})).toBe(0);
    expect(fibonacciRecursion(null)).toBe(0);
    expect(fibonacciRecursion(undefined)).toBe(0);
  });
  it('should return correct fibonacci number', () => {
    [0, 1, 1, 2, 3, 5, 8, 13, 21, 34].forEach((result, n) => {
      expect(fibonacciRecursion(n)).toBe(result);
    });
  });
});
