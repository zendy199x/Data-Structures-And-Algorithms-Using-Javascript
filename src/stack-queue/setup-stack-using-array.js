export function createStack() {
  const stack = [];

  function getTop() {
    return stack.length > 0 ? stack[stack.length - 1] : undefined;
  }

  function getSize() {
    return stack.length;
  }

  function getEmpty() {
    return stack.length === 0;
  }

  function push(data) {
    stack.push(data);
  }

  function pop() {
    return stack.pop();
  }

  return {
    getTop,
    getSize,
    getEmpty,
    push,
    pop,
  };
}
