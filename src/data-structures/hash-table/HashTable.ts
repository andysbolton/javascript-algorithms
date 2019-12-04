import LinkedList from "../linked-list/LinkedList";
import { KeyValue } from "../../utils/KeyValue";

export default class HashTable<T> {
  private readonly _a: number = 33;

  public buckets: LinkedList<KeyValue>[] = [];

  constructor(size?: number) {
    if (size !== undefined) {
      this.buckets = new Array<LinkedList<KeyValue>>(size);
    }
  }

  public getKeys() {

  }

  public hash(val: string): number {
    let result = 0;
    const mod = this.buckets.length + 1;

    for (const char of val) {
      let code = char.charCodeAt(0);
      result = code + this._a * result;
    }

    return result % mod;
  }

  public set(key: string, value: T) {
    
  }

  public has(key: string) {}

  public get(key: string): T | undefined {
    return undefined;
  }

  public delete(key: string) {

  }
}
