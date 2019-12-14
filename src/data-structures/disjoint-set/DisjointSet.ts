import DisjointSetItem from "./DisjointSetItem";

export default class DisjointSet<T extends any> {
  private _forest: Map<string, DisjointSetItem<T>> = new Map();

  makeSet(val: T): DisjointSet<T> {
    const key = val.toString();

    if (this._forest.has(key)) {
      return this;
    }

    const item = new DisjointSetItem(val);

    this._forest.set(key, item);

    return this;
  }

  find(val: T): DisjointSetItem<T> | undefined {
    const key = val.toString();

    const item = this._forest.get(key);

    return item?.isRoot() ? item : item?.getRoot();
  }

  union(first: T, second: T): DisjointSet<T> {
    const firstRoot = this.find(first);
    const secondRoot = this.find(second);

    if (firstRoot === undefined) {
      throw new Error(`${first} does not exist.`);
    }

    if (secondRoot === undefined) {
      throw new Error(`${secondRoot} does not exist.`);
    }

    if (firstRoot.getKey() === secondRoot.getKey()) {
      return this;
    }

    const firstSize = firstRoot.getSize();
    const secondSize = secondRoot.getSize();

    if (firstSize >= secondSize) {
      secondRoot.setParent(firstRoot, true);
    } else {
      firstRoot.setParent(secondRoot, true);
    }

    return this;
  }

  inSameSet(first: T, second: T) {
    const firstItem = this.find(first);
    const secondItem = this.find(second);

    if (firstItem === undefined) {
      throw new Error(`${first} does not exist.`);
    }

    if (secondItem === undefined) {
      throw new Error(`${secondItem} does not exist.`);
    }

    return firstItem === secondItem;
  }
}
