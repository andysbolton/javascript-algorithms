import LinkedList from "../linked-list/LinkedList";

export default class Queue<T> {
  public linkedList: LinkedList<T> = new LinkedList<T>();

  public toString(stringifier?: (arg: T) => string) {
    return this.linkedList.toString(stringifier);
  }

  public isEmpty() {
    return this.peek() === undefined;
  }

  public peek(): T | undefined {
    return this.linkedList.head?.value;
  }

  public enqueue(val: T) {
    this.linkedList.append(val);
  }

  public dequeue(): T | undefined {
    return this.linkedList.deleteHead()?.value;
  }
}
