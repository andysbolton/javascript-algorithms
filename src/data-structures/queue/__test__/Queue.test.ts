import Queue from "../Queue";
import { KeyValue } from "../../../utils/KeyValue";

describe("Queue", () => {
  it("should create empty queue", () => {
    const queue = new Queue<number>();
    expect(queue).not.toBeUndefined();
    expect(queue.linkedList).not.toBeUndefined();
  });

  it("should enqueue data to queue", () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.toString()).toBe("1,2");
  });

  it("should be possible to enqueue/dequeue objects", () => {
    const queue = new Queue<KeyValue>();

    queue.enqueue({ value: "test1", key: "key1" });
    queue.enqueue({ value: "test2", key: "key2" });

    const stringifier: (arg: KeyValue) => string = value =>
      `${value.key}:${value.value}`;

    expect(queue.toString(stringifier)).toBe("key1:test1,key2:test2");
    expect(queue.dequeue()?.value).toBe("test1");
    expect(queue.dequeue()?.value).toBe("test2");
  });

  it("should peek data from queue", () => {
    const queue = new Queue();

    expect(queue.peek()).toBeUndefined();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.peek()).toBe(1);
    expect(queue.peek()).toBe(1);
  });

  it("should check if queue is empty", () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toBe(true);

    queue.enqueue(1);

    expect(queue.isEmpty()).toBe(false);
  });

  it("should dequeue from queue in FIFO order", () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBeUndefined();
    expect(queue.isEmpty()).toBe(true);
  });
});
