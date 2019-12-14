export default class DisjointSetItem<T extends any> {
  private _parent: DisjointSetItem<T> = this;
  private _children: DisjointSetItem<T>[] = [];
  private _value: T;

  constructor(val: T) {
    this._value = val;
  }

  getSize() {
    const children = this.getChildren();

    if (children.length === 0) {
      return 0;
    }

    let size = 0;

    this.getChildren().forEach(child => {
      size += 1;
      size += child?.getSize() ?? 0;
    });

    return size;
  }

  isRoot() {
    return this === this._parent;
  }

  getChildren(): DisjointSetItem<T>[] {
    return this._children;
  }

  getKey(): string {
    return this._value.toString();
  }

  getRoot(): DisjointSetItem<T> {
    return this.isRoot() ? this : this._parent.getRoot();
  }

  addChild(val: DisjointSetItem<T>) {
    this._children.push(val);
    val.setParent(this, false);
  }

  setParent(val: DisjointSetItem<T>, setChild: boolean = true) {
    this._parent = val;
    if (setChild) {
      this._parent.addChild(this);
    }
  }
}
