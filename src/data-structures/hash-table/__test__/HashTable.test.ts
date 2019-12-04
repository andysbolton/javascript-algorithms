import { KeyValue } from "./../../../utils/KeyValue";
import HashTable from "../HashTable";

describe("HashTable", () => {
  it("should create hash table of certain size", () => {
    const defaultHashTable = new HashTable();
    expect(defaultHashTable.buckets.length).toBe(32);

    const biggerHashTable = new HashTable(64);
    expect(biggerHashTable.buckets.length).toBe(64);
  });

  it("should set, read and delete data with collisions", () => {
    const hashTable = new HashTable<string>();

    hashTable.set("a", "sky-old");
    hashTable.set("a", "sky");
    hashTable.set("b", "sea");
    hashTable.set("c", "earth");
    hashTable.set("d", "ocean");
    hashTable.set("e", "moon");
    hashTable.set("f", "sun");
    hashTable.set("a", "sky-new");
    hashTable.set("a", "sky-new-new");

    expect(hashTable.has("x")).toBe(false);
    expect(hashTable.has("b")).toBe(true);
    expect(hashTable.has("c")).toBe(true);

    expect(hashTable.get("a")).toBe("sky-new-new");
    expect(hashTable.get("d")).toBe("ocean");
    expect(hashTable.get("f")).toBe("sun");
    expect(hashTable.get("x")).not.toBeDefined();

    hashTable.delete("a");

    expect(hashTable.delete("not-existing")).toBeUndefined();

    expect(hashTable.get("a")).not.toBeDefined();
    expect(hashTable.get("d")).toBe("ocean");

    hashTable.set("d", "ocean-new");
    expect(hashTable.get("d")).toBe("ocean-new");
  });

  it("should be possible to add objects to hash table", () => {
    const hashTable = new HashTable<any>();

    hashTable.set("objectKey", { prop1: "a", prop2: "b" });

    const object = hashTable.get("objectKey");
    expect(object).toBeDefined();
    expect(object.prop1).toBe("a");
    expect(object.prop2).toBe("b");
  });

  it("should track actual keys", () => {
    const hashTable = new HashTable(3);

    hashTable.set("a", "sky-old");
    hashTable.set("a", "sky");
    hashTable.set("b", "sea");
    hashTable.set("c", "earth");
    hashTable.set("d", "ocean");

    expect(hashTable.has("a")).toBe(true);
    expect(hashTable.has("x")).toBe(false);

    hashTable.delete("a");

    expect(hashTable.has("a")).toBe(false);
    expect(hashTable.has("b")).toBe(true);
    expect(hashTable.has("x")).toBe(false);
  });
});
