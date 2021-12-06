import { createQueue } from './setup-queue-using-array';

describe('createQueue()', () => {
  it('all in one', () => {
    const queue = createQueue();

    // empty queue
    expect(queue.getSize()).toBe(0);
    expect(queue.getFront()).toBeUndefined();
    expect(queue.getBack()).toBeUndefined();

    // queue: 1
    queue.enqueue(1);
    expect(queue.getSize()).toBe(1);
    expect(queue.getFront()).toBe(1);
    expect(queue.getBack()).toBe(1);

    // queue: 2
    queue.enqueue(2);
    expect(queue.getSize()).toBe(2);
    expect(queue.getFront()).toBe(1);
    expect(queue.getBack()).toBe(2);

    // dequeue
    const one = queue.dequeue();
    expect(one).toBe(1);
    expect(queue.getSize()).toBe(1);
    expect(queue.getFront()).toBe(2);
    expect(queue.getBack()).toBe(2);

    // dequeue
    const two = queue.dequeue();
    expect(two).toBe(2);
    expect(queue.getSize()).toBe(0);
    expect(queue.getFront()).toBeUndefined();
    expect(queue.getBack()).toBeUndefined();
  });
});
