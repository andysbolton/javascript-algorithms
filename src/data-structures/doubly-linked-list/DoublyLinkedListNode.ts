export default class DoublyLinkedListNode<T> {
  public value: T;
  public key: string = "";
  public next: DoublyLinkedListNode<T> | undefined;
  public previous: DoublyLinkedListNode<T> | undefined;

  constructor(value: T, next?: DoublyLinkedListNode<T>) {
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
