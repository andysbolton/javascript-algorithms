import LinkedList from "../linked-list/LinkedList";

export default class Stack<T> {
  public linkedList: LinkedList<T> = new LinkedList<T>();

  constructor() {}

  toString(callback?: (arg: T) => string) {
    return this.linkedList.toString(callback);
  }

  isEmpty() {
    return this.linkedList.head === undefined;
  }

  push(val: T) {
    this.linkedList.prepend(val);
  }

  pop(): T | undefined {
    return this.linkedList.deleteHead()?.value;
  }

  peek(): T | undefined {
    return this.linkedList.head?.value;
  }

  toArray() {
    return this.linkedList.toArray();
  }
}
