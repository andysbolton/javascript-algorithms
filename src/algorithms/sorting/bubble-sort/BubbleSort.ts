import Sort from "../Sort";

export default class BubbleSort extends Sort {
  private swap(arr: number[], firstIndex: number, secondIndex: number) {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
  }

  sort(arr: number[]): number[] {
    if (!arr.length || arr.length === 1) {
      return arr;
    }

    let copy = [...arr];

    let isSwapping: boolean = true;
    let lastSortedIndex = copy.length - 1;

    while (isSwapping) {
      isSwapping = false;
      this.visitingCallback();
      for (let i = 0; i < lastSortedIndex; i++) {
        this.visitingCallback();
        if (this.greaterThan(copy[i], copy[i + 1])) {
          this.swap(copy, i, i + 1);
          isSwapping = true;
        }
      }
      lastSortedIndex--;
    }

    return copy;
  }
}
