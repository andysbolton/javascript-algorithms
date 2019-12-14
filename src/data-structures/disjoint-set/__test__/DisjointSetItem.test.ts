import DisjointSetItem from "../DisjointSetItem";

describe("DisjointSetItem", () => {
  it("should do basic manipulation with disjoint set item", () => {
    const itemA = new DisjointSetItem("A");
    const itemB = new DisjointSetItem("B");
    const itemC = new DisjointSetItem("C");
    const itemD = new DisjointSetItem("D");

    expect(itemA.getSize()).toBe(0);
    expect(itemA.getChildren()).toEqual([]);
    expect(itemA.getKey()).toBe("A");
    expect(itemA.getRoot()).toEqual(itemA);
    expect(itemA.isRoot()).toBe(true);
    expect(itemB.isRoot()).toBe(true);

    itemA.addChild(itemB);
    itemD.setParent(itemC);

    expect(itemA.getSize()).toBe(1);
    expect(itemC.getSize()).toBe(1);

    expect(itemB.getSize()).toBe(0);
    expect(itemD.getSize()).toBe(0);

    expect(itemA.getChildren().length).toBe(1);
    expect(itemC.getChildren().length).toBe(1);

    expect(itemA.getChildren()[0]).toEqual(itemB);
    expect(itemC.getChildren()[0]).toEqual(itemD);

    expect(itemB.getChildren().length).toBe(0);
    expect(itemD.getChildren().length).toBe(0);

    expect(itemA.getRoot()).toEqual(itemA);
    expect(itemB.getRoot()).toEqual(itemA);

    expect(itemC.getRoot()).toEqual(itemC);
    expect(itemD.getRoot()).toEqual(itemC);

    expect(itemA.isRoot()).toBe(true);
    expect(itemB.isRoot()).toBe(false);
    expect(itemC.isRoot()).toBe(true);
    expect(itemD.isRoot()).toBe(false);

    itemA.addChild(itemC);

    expect(itemA.isRoot()).toBe(true);
    expect(itemB.isRoot()).toBe(false);
    expect(itemC.isRoot()).toBe(false);
    expect(itemD.isRoot()).toBe(false);

    expect(itemA.getSize()).toEqual(3);
    expect(itemB.getSize()).toEqual(0);
    expect(itemC.getSize()).toEqual(1);
  });

  it("should do additional basic manipulation with disjoint set item", () => {
    const itemA = new DisjointSetItem(1);
    const itemB = new DisjointSetItem(2);
    const itemC = new DisjointSetItem(3);
    const itemD = new DisjointSetItem(4);

    expect(itemA.getSize()).toBe(0);
    expect(itemA.getChildren()).toEqual([]);
    expect(itemA.getKey()).toBe("1");
    expect(itemA.getRoot()).toEqual(itemA);
    expect(itemA.isRoot()).toBe(true);
    expect(itemB.isRoot()).toBe(true);

    itemA.addChild(itemB);
    itemD.setParent(itemC);

    expect(itemA.getSize()).toBe(1);
    expect(itemC.getSize()).toBe(1);

    expect(itemB.getSize()).toBe(0);
    expect(itemD.getSize()).toBe(0);

    expect(itemA.getChildren().length).toBe(1);
    expect(itemC.getChildren().length).toBe(1);

    expect(itemA.getChildren()[0]).toEqual(itemB);
    expect(itemC.getChildren()[0]).toEqual(itemD);

    expect(itemB.getChildren().length).toBe(0);
    expect(itemD.getChildren().length).toBe(0);

    expect(itemA.getRoot()).toEqual(itemA);
    expect(itemB.getRoot()).toEqual(itemA);

    expect(itemC.getRoot()).toEqual(itemC);
    expect(itemD.getRoot()).toEqual(itemC);

    expect(itemA.isRoot()).toBe(true);
    expect(itemB.isRoot()).toBe(false);
    expect(itemC.isRoot()).toBe(true);
    expect(itemD.isRoot()).toBe(false);

    itemA.addChild(itemC);

    expect(itemA.isRoot()).toBe(true);
    expect(itemB.isRoot()).toBe(false);
    expect(itemC.isRoot()).toBe(false);
    expect(itemD.isRoot()).toBe(false);

    expect(itemA.getSize()).toEqual(3);
    expect(itemB.getSize()).toEqual(0);
    expect(itemC.getSize()).toEqual(1);
  });
});
