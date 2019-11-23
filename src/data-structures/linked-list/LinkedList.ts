import LinkedListNode from "./LinkedListNode";

export default class LinkedList<T>
  implements IterableIterator<LinkedListNode<T>> {
  private _head: LinkedListNode<T> | undefined;
  private _tail: LinkedListNode<T> | undefined;
  private _currentNode: LinkedListNode<T> | undefined;

  toString(callback?: (arg: T) => string): string {
    let ret = [];
    for (const node of this) {
      ret.push(callback ? callback(node.value) : node.value);
    }
    return ret.join(",");
  }

  public next(): IteratorResult<LinkedListNode<T>> {
    if (!this._currentNode && this.head) {
      this._currentNode = this.head;
      return {
        done: false,
        value: this._currentNode
      };
    }

    const nextValue = this._currentNode && this._currentNode.next;
    if (nextValue) {
      this._currentNode = nextValue;
      return {
        done: false,
        value: nextValue
      };
    }

    this._currentNode = undefined;
    return {
      done: true,
      value: undefined
    };
  }

  [Symbol.iterator](): IterableIterator<LinkedListNode<T>> {
    if (this._currentNode !== undefined) {
      throw new Error("unsafe action, iterator is busy");
    }
    return this;
  }

  get head(): LinkedListNode<T> | undefined {
    return this._head;
  }

  get tail(): LinkedListNode<T> | undefined {
    return this._tail;
  }

  append(value: T): LinkedList<T> {
    const node = new LinkedListNode<T>(value);
    if (!this.head) {
      this._head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this._tail = node;
    return this;
  }

  prepend(value: T): LinkedList<T> {
    const node = new LinkedListNode<T>(value);
    if (this.head) {
      node.next = this.head;
    }
    this._head = node;
    if (!this.tail) {
      this._tail = node;
    }
    return this;
  }

  delete(val: T): LinkedListNode<T> | undefined {
    let foundNode: LinkedListNode<T> | undefined = undefined;
    let node = this._head;

    // make to remove all initial head references that match
    while (this._head?.value === val) {
      this.deleteHead();
    }

    while (node?.next) {
      if (node.next.value === val) {
        foundNode = node.next;
        node.next = node.next.next;
      } else {
        node = node.next;
      }
    }

    // if tail is equal to val, set new tail
    if (this.tail?.value === val) {
      this._tail = node;
    }

    return foundNode;
  }

  deleteTail(): LinkedListNode<T> | undefined {
    const ret = this._tail;
    if (this.tail) {
      if (this.tail === this.head) {
        this._head = undefined;
        this._tail = undefined;
      } else {
        for (const node of this) {
          if (node.next === this.tail) {
            node.next = undefined;
            this._tail = node;
          }
        }
      }
    }
    return ret;
  }

  deleteHead(): LinkedListNode<T> | undefined {
    const ret = this._head;
    if (this._head) {
      if (this._head === this._tail) {
        this._head = undefined;
        this._tail = undefined;
      } else {
        this._head = this._head.next;
      }
    }
    return ret;
  }

  toArray(): Array<T> {
    let ret = [];
    for (const node of this) {
      ret.push(node.value);
    }
    return ret;
  }

  fromArray(arr: Array<T>): void {
    for (const val of arr) {
      this.append(val);
    }
  }

  find({
    value,
    callback
  }: {
    value?: T;
    callback?: (arg: T) => boolean;
  }): LinkedListNode<T> | undefined {
    let node = this._head;
    while (node) {
      if (node.value === value || (callback && callback(node.value))) {
        return node;
      } else {
        node = node.next;
      }
    }
    return undefined;
  }

  reverse() {
    let currNode = this._head;
    let prevNode = undefined;
    let nextNode = undefined;

    while (currNode) {
      nextNode = currNode.next;

      currNode.next = prevNode;

      prevNode = currNode;
      currNode = nextNode;
    }

    this._tail = this._head;
    this._head = prevNode;

    return this;
  }
}
