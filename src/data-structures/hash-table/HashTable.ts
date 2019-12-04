import LinkedList from "../linked-list/LinkedList";
import { KeyValue } from "../../utils/KeyValue";
import PolynomialHash from "../../algorithms/cryptography/polynomial-hash/PolynomialHash";

export default class HashTable<T> {
  private readonly _base = 33;
  private readonly _defaultSize = 32;

  public buckets: (LinkedList<KeyValue<T>> | undefined)[] = [];

  constructor(size?: number) {
    this.buckets = new Array<LinkedList<KeyValue<T>>>(
      size !== undefined ? size : this._defaultSize
    );
    this.buckets.fill(undefined);
  }

  public getKeys() {}

  public hash(val: string): number {
    const modulus = this.buckets.length;
    return new PolynomialHash({ base: this._base, modulus }).hash(val);
  }

  public set(key: string, value: T) {
    const index = this.hash(key);
    const bucketItem = this.buckets[index];

    const item: KeyValue<T> = {
      key,
      value
    };

    if (bucketItem === undefined) {
      const linkedList = new LinkedList<KeyValue<T>>();
      linkedList.append({
        key,
        value
      });
      this.buckets[index] = linkedList;
    } else {
      const foundItem = bucketItem.find({ callback: item => item.key === key });
      if (foundItem !== undefined) {
        foundItem.value = item;
      } else {
        bucketItem.append(item);
      }
    }
  }

  public has(key: string): boolean {
    const index = this.hash(key);
    const bucketItem = this.buckets[index];

    if (bucketItem === undefined) {
      return false;
    }

    const item = bucketItem.find({ callback: item => item.key === key });

    return !!item;
  }

  public get(key: string): T | undefined {
    const index = this.hash(key);
    const bucketItem = this.buckets[index];

    if (bucketItem === undefined) {
      return undefined;
    }

    return bucketItem.find({ callback: item => item.key === key })?.value
      ?.value;
  }

  public delete(key: string): T | undefined {
    const index = this.hash(key);
    const bucketItem = this.buckets[index];

    if (bucketItem === undefined) {
      return undefined;
    }

    const foundItem = bucketItem.find({ callback: item => item.key === key });

    if (foundItem !== undefined) {
      return bucketItem.delete(foundItem.value)?.value?.value;
    }

    return undefined;
  }
}
