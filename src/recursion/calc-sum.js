// S(n) = 1 + 2 + ... + n

// using math
export function calculateS1(n) {
  if (typeof n !== 'number' || n <= 0) return 0;
  if (n <= 0) return 0;

  return (n * (n + 1)) / 2;
}

// using loop
export function calculateS2(n) {
  if (typeof n !== 'number' || n <= 0) return 0;
  if (n <= 0) return 0;

  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// using recursive function
export function calculateS3(n) {
  if (typeof n !== 'number' || n <= 0) return 0;
  // base case
  if (n <= 0) return 0;

  // tail recursion
  return n + calculateS3(n - 1);
}

// calculateS(5); // 15
// S(5) = 5 + S(4)
// S(4) = 4 + S(3)
// S(3) = 3 + S(2)
// S(2) = 2 + S(1)
// S(1) = 1 + S(0)
// S(0) = 0 BASE CASE / TERMINATION