// - insertTail(newData)
// - insertBeforePosition(newData, position)

export function createLinkedList() {
  let head = null;

  function getTail() {
    if (head == null) return null;

    let tail = head;
    while (tail.next != null) {
      console.log(tail.data);

      tail = tail.next;
    }

    return tail;
  }

  function insertHead(newData) {
    const newNode = {
      data: newData,
      next: null,
    };

    if (head == null) {
      head = newNode;
    } else {
      // otherwise, linked list has some item
      newNode.next = head;
      head = newNode;
    }

    return head;
  }

  function insertTail(newData) {
    const newNode = {
      data: newData,
      next: null,
    };

    if (head == null) {
      head = newNode;
    } else {
      const tail = getTail();
      tail.next = newNode;
    }

    return head;
  }

  function insertBeforePosition(newData, position) {
    if (position <= 0 || head == null) {
      insertHead(newData);
      return head;
    }

    let prev = head;
    let curr = head;
    let i = 0;

    while (curr != null && i < position) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    // found not to insert
    const newNode = {
      data: newData,
      next: curr,
    };
    prev.next = newNode;

    return head;
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
    getTail,
    insertHead,
    insertTail,
    insertBeforePosition,
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

numberLinkedList.printList();
