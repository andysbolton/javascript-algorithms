import Heap, { HeapEnum } from "./Heap";

export default class MaxHeap<T> extends Heap<T> {
  constructor() {
    super();
    this.heapType = HeapEnum.MaxHeap;
  }
}
