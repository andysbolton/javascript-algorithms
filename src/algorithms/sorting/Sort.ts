import Comparator from "../../utils/comparator/Comparator";

/**
 * @typedef {Object} SorterCallbacks
 * @property {function(a: *, b: *)} compareCallback - If provided then all elements comparisons
 *  will be done through this callback.
 * @property {function(a: *)} visitingCallback - If provided it will be called each time the sorting
 *  function is visiting the next element.
 */

export default abstract class Sort {
  protected visitingCallback: () => void = () => {};
  private comparator: (a: any, b: any) => number;

  protected lessThan(a: any, b: any) {
    return this.comparator(a, b) === -1;
  }

  protected greaterThan(a: any, b: any) {
    return this.comparator(a, b) === 1;
  }

  protected equal(a: any, b: any) {
    return this.comparator(a, b) === 0;
  }

  constructor({
    visitingCallback,
    compareCallback
  }: {
    visitingCallback?: () => void;
    compareCallback?: () => number;
  } = {}) {
    if (visitingCallback !== undefined) {
      this.visitingCallback = visitingCallback;
    }

    if (compareCallback !== undefined) {
      this.comparator = compareCallback;
    } else {
      this.comparator = (a: number, b: number) => {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      };
    }
  }

  abstract sort(arr: number[]): number[];
}
