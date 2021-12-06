// - some(isValidFn)
// - every(isValidFn)

export function createLinkedList() {
  let head = null;

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

  function some(isValidFn) {
    if (head == null) return false;

    let curr = head;
    while (curr != null) {
      if (isValidFn(curr.data)) return true;

      // move to the next item
      curr = curr.next;
    }

    return false;
  }

  function every(isValidFn) {
    if (head == null) return false;

    let curr = head;
    while (curr != null) {
      if (!isValidFn(curr.data)) return false;

      // move to the next item
      curr = curr.next;
    }

    return true;
  }

  function printList() {
    if (head == null) return;

    let curr = head;
    while (curr != null) {
      // print data
      console.log(curr.data);

      curr = curr.next;
    }
  }

  return {
    insertHead,
    some,
    every,
    printList,
  };
}

const numberLinkedList = createLinkedList();

numberLinkedList.insertHead(5);
numberLinkedList.insertHead(4);
numberLinkedList.insertHead(3);
numberLinkedList.insertHead(2);
numberLinkedList.insertHead(1);
// 1 -> 2 -> 3 -> 4 -> 5

numberLinkedList.printList();
