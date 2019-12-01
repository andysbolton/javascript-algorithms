import Heap, { HeapEnum } from "./Heap";

export default class MinHeap<T> extends Heap<T> {
  constructor() {
    super();
    this.heapType = HeapEnum.MinHeap;
  }
}
