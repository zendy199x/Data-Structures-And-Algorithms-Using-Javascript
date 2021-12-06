import { createLinkedList } from './setup-linked-list-remove';

describe('removeHead()', () => {
  it('should return null if list is empty', () => {
    const numberLinkedList = createLinkedList();
    const head = numberLinkedList.removeHead();

    expect(head).toBeNull();
  });

  it('should return null if list has one item', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertHead(5);
    const head = numberLinkedList.removeHead();

    expect(head).toBeNull();
  });

  it('should return one item if list has two items', () => {
    // 5 -> 10
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertHead(10);
    numberLinkedList.insertHead(5);
    const head = numberLinkedList.removeHead();

    expect(head).toEqual({ data: 10, next: null });
  });
});

describe('removeTail()', () => {
  it('should return null if list is empty', () => {
    const numberLinkedList = createLinkedList();
    const head = numberLinkedList.removeTail();

    expect(head).toBeNull();
  });

  it('should return null if list has one item', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertHead(5);
    const head = numberLinkedList.removeTail();

    expect(head).toBeNull();
  });

  it('should return one item if list has two items', () => {
    // 5 -> 10
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertHead(10);
    numberLinkedList.insertHead(5);
    const head = numberLinkedList.removeTail();

    expect(head).toEqual({ data: 5, next: null });
  });
});

describe('removeAtPosition(position)', () => {
  it('should return null if list is empty', () => {
    const numberLinkedList = createLinkedList();
    const head = numberLinkedList.removeAtPosition(0);

    expect(head).toBeNull();
  });

  it('should return null if list has one item', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertHead(5);
    const head = numberLinkedList.removeAtPosition(1);
    expect(head).toBeNull();
  });

  it('should remove correctly item at 0 <= position < n -1', () => {
    // 0 -> 5 -> 10
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertHead(10);
    numberLinkedList.insertHead(5);
    numberLinkedList.insertHead(0);
    const head = numberLinkedList.removeAtPosition(1);

    expect(head).toEqual({ data: 0, next: { data: 10, next: null } });
  });
});
