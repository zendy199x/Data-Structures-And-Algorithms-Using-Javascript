// Setup common methods for linked list
// - getHead()
// - getTail()
// - getSize()
// - findIndexByData()
// - findWithCallBack()

function createLinkedList() {
  let head = null;

  function getHead() {
    return head;
  }

  function getTail() {
    if (head == null) return null;

    let tail = head;
    while (tail.next != null) {
      console.log(tail.data);

      tail = tail.next;
    }

    return tail;
  }

  function getSize() {
    if (head == null) return null;

    let current = head;
    let count = 0;
    while (current != null) {
      count++;
      current = current.next;
    }

    return count;
  }

  function findIndexByData(data) {
    if (head == null) return -1;

    let current = head;
    let i = 0;
    while (current != null) {
      if (current.data === data) return i;

      // go to next node
      i++;
      current = current.next;
    }

    return -1;
  }

  function findWithCallBack(callback) {
    if (head == null) return undefined;

    let current = head;
    let i = 0;
    while (current != null) {
      if (callback(current.data, i)) return current.data;

      // go to next node
      i++;
      current = current.next;
    }

    return undefined;
  }

  function insertHead(newData) {
    const newNode = {
      data: newData,
      next: null,
    };

    if (head == null) {
      head = newNode;
      return;
    }

    // otherwise, linked list has some item
    newNode.next = head;
    head = newNode;
  }

  function printList() {
    if (head == null) return;

    let current = head;
    while (current != null) {
      // print data
      console.log(current.data);

      current = current.next;
    }
  }

  return {
    getHead,
    getTail,
    getSize,
    findIndexByData,
    findWithCallBack,
    insertHead,
    printList,
  };
}

const numberLinkedList = createLinkedList();

numberLinkedList.insertHead(5);
numberLinkedList.insertHead(4);
numberLinkedList.insertHead(3);
numberLinkedList.insertHead(2);
numberLinkedList.insertHead(1);
// 3 -> 4 -> 5

// console.log('Head', numberLinkedList.getHead());
// console.log('Tail', numberLinkedList.getTail());
// console.log('Size', numberLinkedList.getSize());

console.log(numberLinkedList.findIndexByData(3)); // -> 2
console.log(numberLinkedList.findIndexByData(6)); // -> -1

console.log(numberLinkedList.findWithCallBack((x) => x % 2 === 0)); // -> 2
console.log(numberLinkedList.findWithCallBack((x) => x > 5)); // -> undefined

numberLinkedList.printList();
