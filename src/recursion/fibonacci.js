// using loop
export function fibonacciLoop(n) {
  if (typeof n !== 'number' || n <= 0) return 0;
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let curr = 1;
  let next = 1;

  let i = 2;
  while (i <= n) {
    next = prev + curr;

    //move forward
    i++;
    prev = curr;
    curr = next;
  }

  return next;
}

// using recursion
export function fibonacciRecursion(n) {
  if (typeof n !== 'number' || n <= 0) return 0;
  if (n <= 0) return 0;
  if (n === 1) return 1;

  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}
