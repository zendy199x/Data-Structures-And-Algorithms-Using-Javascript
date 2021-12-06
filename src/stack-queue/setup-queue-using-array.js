export function createQueue() {
  let queue = [];

  function getFront() {
    // return queue.length ? queue[0] : undefined;
    return queue[0];
  }

  function getBack() {
    // return queue.length > 0 ? queue[queue.length - 1] : undefined;
    return queue[queue.length - 1];
  }

  function getSize() {
    return queue.length;
  }

  function enqueue(data) {
    queue.push(data);
  }

  function dequeue() {
    return queue.shift();
  }

  return {
    getFront,
    getBack,
    getSize,
    enqueue,
    dequeue,
  };
}
