import GraphVertex from "./GraphVertex";

export default class GraphEdge {
  startVertex: GraphVertex;
  endVertex: GraphVertex;
  weight: number;

  constructor(vertexA: GraphVertex, vertexB: GraphVertex, weight: number = 0) {
    this.startVertex = vertexA;
    this.endVertex = vertexB;
    this.weight = weight;
  }

  toString(): string {
    return `${this.startVertex.toString()}_${this.endVertex.toString()}`;
  }

  getKey(): string {
    return this.toString();
  }

  reverse(): void {
    const temp = this.startVertex;
    this.startVertex = this.endVertex;
    this.endVertex = temp;
  }
}
