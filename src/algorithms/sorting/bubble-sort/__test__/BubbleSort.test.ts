import BubbleSort from "../BubbleSort";
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester
} from "../../SortTester";

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 20;
const NOT_SORTED_ARRAY_VISITING_COUNT = 189;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 209;
const EQUAL_ARRAY_VISITING_COUNT = 20;

describe("BubbleSort", () => {
  const sortTester = new SortTester();

  it("should sort array", () => {
    sortTester.testSort(BubbleSort);
  });

  it("should sort array with custom comparator", () => {
    sortTester.testSortWithCustomComparator(BubbleSort);
  });

  it("should do stable sorting", () => {
    sortTester.testSortStability(BubbleSort);
  });

  it("should sort negative numbers", () => {
    sortTester.testNegativeNumbersSort(BubbleSort);
  });

  it("should visit EQUAL array element specified number of times", () => {
    sortTester.testAlgorithmTimeComplexity(
      BubbleSort,
      equalArr,
      EQUAL_ARRAY_VISITING_COUNT
    );
  });

  it("should visit SORTED array element specified number of times", () => {
    sortTester.testAlgorithmTimeComplexity(
      BubbleSort,
      sortedArr,
      SORTED_ARRAY_VISITING_COUNT
    );
  });

  it("should visit NOT SORTED array element specified number of times", () => {
    sortTester.testAlgorithmTimeComplexity(
      BubbleSort,
      notSortedArr,
      NOT_SORTED_ARRAY_VISITING_COUNT
    );
  });

  it("should visit REVERSE SORTED array element specified number of times", () => {
    sortTester.testAlgorithmTimeComplexity(
      BubbleSort,
      reverseArr,
      REVERSE_SORTED_ARRAY_VISITING_COUNT
    );
  });
});
