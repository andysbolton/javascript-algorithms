enum HeapEnum {
  MinHeap,
  MaxHeap
}

type HeapType = HeapEnum | undefined;

export default class Heap<T> {
  protected heapType: HeapType = undefined;

  private throwIfUninitialized() {
    if (!this.heapType) {
      throw new Error("can't call method on base class");
    }
  }

  add(val: T) {
    this.throwIfUninitialized();
  }

  remove() {
    this.throwIfUninitialized();
  }

  poll() {
    this.throwIfUninitialized();
  }
}
