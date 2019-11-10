import { KeyValue } from "./../KeyValue";
import LinkedListNode from "../LinkedListNode";

describe("LinkedListNode", () => {
  it("should create list node with value", () => {
    const node = new LinkedListNode(1);

    expect(node.value).toBe(1);
    expect(node.next).toBeUndefined();
  });

  it("should create list node with object as a value", () => {
    const nodeValue = { value: 1, key: "test" };
    const node = new LinkedListNode(nodeValue);

    expect(node.value.value).toBe(1);
    expect(node.value.key).toBe("test");
    expect(node.next).toBeUndefined();
  });

  it("should link nodes together", () => {
    const node2 = new LinkedListNode(2);
    const node1 = new LinkedListNode(1, node2);

    expect(node1.next).toBeDefined();
    expect(node2.next).toBeUndefined();
    expect(node1.value).toBe(1);
    expect(node1.next?.value).toBe(2);
  });

  it("should convert node to string", () => {
    const node = new LinkedListNode<number>(1);

    expect(node.toString()).toBe("1");

    node.value = 123;
    expect(node.toString()).toBe("123");
  });

  it("should convert node to string with custom stringifier", () => {
    const nodeValue = { value: 1, key: "test" };
    const node = new LinkedListNode(nodeValue);
    const toStringCallback = (value: KeyValue) =>
      `value: ${value.value}, key: ${value.key}`;

    expect(node.toString(toStringCallback)).toBe("value: 1, key: test");
  });
});
