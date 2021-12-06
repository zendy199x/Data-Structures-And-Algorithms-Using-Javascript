import { createStack } from './setup-stack-using-array';

describe('createStack()', () => {
  it('all in one', () => {
    const stack = createStack();

    // empty stack
    expect(stack.getSize()).toBe(0);
    expect(stack.getEmpty()).toBe(true);
    expect(stack.getTop()).toBeUndefined();

    // push: 5
    stack.push(5);
    expect(stack.getSize()).toBe(1);
    expect(stack.getEmpty()).toBe(false);
    expect(stack.getTop()).toBe(5);

    // push: 10
    stack.push(10);
    expect(stack.getSize()).toBe(2);
    expect(stack.getEmpty()).toBe(false);
    expect(stack.getTop()).toBe(10);

    // pop() -> 10
    const ten = stack.pop();
    expect(ten).toBe(10);
    expect(stack.getSize()).toBe(1);
    expect(stack.getEmpty()).toBe(false);
    expect(stack.getTop()).toBe(5);

    // pop() -> 5
    const five = stack.pop();
    expect(five).toBe(5);
    expect(stack.getSize()).toBe(0);
    expect(stack.getEmpty()).toBe(true);
    expect(stack.getTop()).toBeUndefined();
  });
});
