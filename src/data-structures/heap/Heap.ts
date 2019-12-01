import Comparator from "../../utils/comparator/Comparator";

export enum HeapEnum {
  MinHeap,
  MaxHeap
}

type HeapType = HeapEnum | undefined;

export default class Heap<T> {
  protected heapType: HeapType = undefined;

  private _heap: T[] = [];
  private get _length() {
    return this._heap.length;
  }

  private upCompare(a: T, b: T): boolean {
    if (this.heapType === HeapEnum.MinHeap) {
      return a > b;
    }
    return a < b;
  }

  private downCompare(a: T, b: T): boolean {
    if (this.heapType === HeapEnum.MinHeap) {
      return a < b;
    }
    return a > b;
  }

  private getLeftChildIndex(parentIndex: number): number {
    return parentIndex * 2 + 1;
  }
  private getRightChildIndex(parentIndex: number): number {
    return parentIndex * 2 + 2;
  }
  private getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  private hasLeftChildIndex(index: number) {
    return this.getLeftChildIndex(index) < this._length;
  }
  private hasRightChildIndex(index: number) {
    return this.getRightChildIndex(index) < this._length;
  }
  private hasParentIndex(index: number) {
    return this.getParentIndex(index) >= 0;
  }

  private leftChild(index: number) {
    return this._heap[this.getLeftChildIndex(index)];
  }
  private rightChild(index: number) {
    return this._heap[this.getRightChildIndex(index)];
  }
  private parent(index: number) {
    return this._heap[this.getParentIndex(index)];
  }

  private throwIfUninitialized() {
    if (this.heapType === undefined) {
      throw new Error("can't call method on base class");
    }
  }

  toString() {
    return this._heap.join(",");
  }

  isEmpty(): boolean {
    return this._length === 0;
  }

  private swap(first: number, second: number) {
    const temp = this._heap[first];
    this._heap[first] = this._heap[second];
    this._heap[second] = temp;
  }

  private swapTailAndRemove(index: number = 0): T | undefined {
    const lastIndex = this._length - 1;
    const root = this._heap[index];
    this.swap(index, lastIndex);
    this._heap.splice(lastIndex, 1);
    return root;
  }

  private heapifyUp(val: T) {
    let index = this._length - 1;
    while (
      this.hasParentIndex(index) &&
      this.upCompare(this.parent(index), val)
    ) {
      let parentIndex = this.getParentIndex(index);
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  private heapifyDown(index: number = 0) {
    while (this.hasLeftChildIndex(index)) {
      let smallestIndex = index;
      const leftChild = this.leftChild(smallestIndex);

      if (this.downCompare(leftChild, this._heap[index])) {
        smallestIndex = this.getLeftChildIndex(index);
      }

      if (this.hasRightChildIndex(index)) {
        const rightChild = this.rightChild(index);
        if (this.downCompare(rightChild, this._heap[smallestIndex])) {
          smallestIndex = this.getRightChildIndex(index);
        }
      }

      this.swap(index, smallestIndex);

      index++;
    }
  }

  add(val: T) {
    this.throwIfUninitialized();

    this._heap.push(val);
    this.heapifyUp(val);
  }

  remove(val: T, comparator?: Comparator<T>): Heap<T> {
    this.throwIfUninitialized();

    let indicesToRemove = this.find(val, comparator);
    const length = indicesToRemove.length;

    for (let i = 0; i < length; i++) {
      let index = indicesToRemove[0];
      this.swapTailAndRemove(index);
      this.heapifyDown(index);
      indicesToRemove = this.find(val, comparator);
    }

    return this;
  }

  peek(): T | undefined {
    return this._heap[0];
  }

  find(val: T, comparator?: Comparator<T>): number[] {
    this.throwIfUninitialized();

    let result: number[] = [];
    for (let i = 0; i < this._length; i++) {
      if (comparator !== undefined) {
        if (comparator.equal(this._heap[i], val)) {
          result.push(i);
        }
      } else if (this._heap[i] === val) {
        result.push(i);
      }
    }
    return result;
  }

  poll(): T | undefined {
    this.throwIfUninitialized();

    const root = this.swapTailAndRemove();
    this.heapifyDown();

    return root;
  }
}
