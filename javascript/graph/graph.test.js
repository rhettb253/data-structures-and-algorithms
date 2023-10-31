const Graph = require("./graph");

describe("graph implementation", () => {

  test("we can add verticies", () => {
    const myGraph = new Graph();
    myGraph.addVertex(3);
    myGraph.addVertex(5);
    expect(myGraph.adjacencyList.size).toBe(2);
  });

  test("we can return an array of graph verticies", () => {
    const myGraph = new Graph();
    myGraph.addVertex(3);
    myGraph.addVertex(5);
    expect(myGraph.getVerticies().length).toEqual(2);
  });

  test("we can add an edge", () => {
    const myGraph = new Graph();
    const v1 = myGraph.addVertex(3);
    const v2 = myGraph.addVertex(5);
    const e1 = myGraph.addEdge(v1,v2,10);
    expect(e1.weight).toEqual(10);
    expect(myGraph.getEdges(v1).length).toBe(1);
  });

  test("we can traverse the graph", () => {
    const myGraph = new Graph();
    const v1 = myGraph.addVertex(3);
    const v2 = myGraph.addVertex(5);
    myGraph.addEdge(v1,v2,10);
    // expect(myGraph.breadthFirst(v1).length).toBe(1);
  });
});
