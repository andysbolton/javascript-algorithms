import DoublyLinkedListNode from "./DoublyLinkedListNode";

export default class DoublyLinkedList<T> {
  public head: DoublyLinkedListNode<T>;
  public tail: DoublyLinkedListNode<T>;

  public comparator: ((a: any, b: any) => number) | undefined;

  private list: DoublyLinkedListNode<T>[] = [];

  constructor(comparator?: (a: any, b: any) => number) {
    this.comparator = comparator;
  }

  toString(callback?: (arg: T) => string): string {
    if (!callback) {
      return this.list.map(node => String(node.value)).join(",");
    }
    // return callback(this.value);
    return "";
  }

  private traverse() {}

  append(value: T): DoublyLinkedList<T> {
    const node = new DoublyLinkedListNode<T>(value);
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
    this.list.push(node);

    return this;
  }

  prepend(value: T): DoublyLinkedList<T> {
    return this;
  }

  delete(value: T): DoublyLinkedListNode<T> | undefined {
    return undefined;
  }

  deleteTail(): DoublyLinkedListNode<T> | undefined {
    return undefined;
  }

  deleteHead(): DoublyLinkedListNode<T> | undefined {
    return undefined;
  }

  fromArray(arr: Array<T>): void {}

  find({
    value,
    callback
  }: {
    value?: T;
    callback?: (arg: T) => boolean;
  }): DoublyLinkedListNode<T> | undefined {
    if (callback !== undefined) {
    } else if (value !== undefined) {
    }
    return undefined;
  }

  reverse() {}
}
