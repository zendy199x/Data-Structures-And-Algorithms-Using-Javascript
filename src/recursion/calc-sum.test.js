import { calculateS1, calculateS2, calculateS3 } from './calc-sum';

describe('calculateS1(n)', () => {
  it('should return 0 when n not an number', () => {
    expect(calculateS1('')).toBe(0);
    expect(calculateS1({})).toBe(0);
    expect(calculateS1(null)).toBe(0);
    expect(calculateS1(undefined)).toBe(0);
  });

  it('should return 0 when n <= 0', () => {
    [-1, 0].forEach((n) => expect(calculateS1(n)).toBe(0));
  });

  it('should return sum when n > 0', () => {
    expect(calculateS1(1)).toBe(1);
    expect(calculateS1(2)).toBe(3);
    expect(calculateS1(3)).toBe(6);
  });
});

describe('calculateS2(n)', () => {
  it('should return 0 when n not an number', () => {
    expect(calculateS2('')).toBe(0);
    expect(calculateS2({})).toBe(0);
    expect(calculateS2(null)).toBe(0);
    expect(calculateS2(undefined)).toBe(0);
  });

  it('should return 0 when n <= 0', () => {
    [-1, 0].forEach((n) => expect(calculateS2(n)).toBe(0));
  });

  it('should return sum when n > 0', () => {
    expect(calculateS2(1)).toBe(1);
    expect(calculateS2(2)).toBe(3);
    expect(calculateS2(3)).toBe(6);
  });
});

describe('calculateS3(n)', () => {
  it('should return 0 when n not an number', () => {
    expect(calculateS3('')).toBe(0);
    expect(calculateS3({})).toBe(0);
    expect(calculateS3(null)).toBe(0);
    expect(calculateS3(undefined)).toBe(0);
  });

  it('should return 0 when n <= 0', () => {
    [-1, 0].forEach((n) => expect(calculateS3(n)).toBe(0));
  });

  it('should return sum when n > 0', () => {
    expect(calculateS3(1)).toBe(1);
    expect(calculateS3(2)).toBe(3);
    expect(calculateS3(3)).toBe(6);
  });
});