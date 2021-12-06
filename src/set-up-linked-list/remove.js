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

  function removeHead() {
    if (head != null) head = head.next;

    return head;
  }

  function removeTail() {
    if (head == null) return null;
    if (head.next == null) {
      head = null;
      return head;
    }

    let secondLast = head;
    while (secondLast.next.next != null) {
      secondLast = secondLast.next;
    }

    secondLast.next = null;
    return head;
  }

  function removeAtPosition(position) {
    if (position <= 0 || head == null) return removeHead();

    // has only 1 item
    if (head.next == null) {
      head = null;
      return head;
    }

    let prev = head;
    let curr = head;
    let i = 0;

    while (curr.next != null && i < position) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    prev.next = curr.next;
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
    removeHead,
    removeTail,
    removeAtPosition,
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
