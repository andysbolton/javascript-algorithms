export default class LinkedListNode<T> {
  public value: T;
  public next: LinkedListNode<T> | undefined;

  constructor(value: T, next?: LinkedListNode<T>) {
    this.value = value;
    this.next = next;
  }

  toString(callback?: (arg: T) => string): string {
    if (!callback) {
      return String(this.value);
    }
    return callback(this.value);
  }
}
