import GraphEdge from "./GraphEdge";

export default class GraphVertex {
  public value: string;
  public edges: Array<GraphEdge> = [];

  constructor(value?: string) {
    if (value === undefined) {
      throw new Error("Argument `value` is required");
    }
    this.value = value;
  }

  toString(): string {
    return this.value.toString();
  }

  getKey(): string {
    return this.value.toString();
  }

  getEdges(): Array<GraphEdge> {
    return this.edges;
  }

  addEdge(edge: GraphEdge): GraphVertex {
    return this;
  }

  deleteEdge(edge: GraphEdge) {}

  deleteAllEdges() {}

  hasEdge(edge: GraphEdge): boolean {
    return false;
  }

  getNeighbors(): Array<GraphVertex> {
    return [];
  }

  hasNeighbor(vertex: GraphVertex): boolean {
    return false;
  }

  findEdge(vertex: GraphVertex) {}

  getDegree() {}
}
