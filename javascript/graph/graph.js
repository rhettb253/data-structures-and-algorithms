const { Queue } = require("../stack-and-queue");

class Node {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(start, end, weight = null) {
    this.start = start;
    this.end = end;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    const vertex = new Node(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addEdge(start, end, weight = null) {
    //unidirectional
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      Error("invalid verticies");
    }
    let edges = this.adjacencyList.get(start);
    const newEdge = new Edge(start, end, weight);
    edges.push(newEdge);
    this.adjacencyList.set(start, edges);
    return newEdge;
  }

  addUndirectedEdge(start, end, weight) {
    this.addEdge(start, end, weight);
    this.addEdge(end, start, weight);
  }

  getVerticies() {
    const vertexArr = [];
    this.adjacencyList.forEach((_, key) => vertexArr.push(key)); //mak it key.value to get the value of the key object
    return vertexArr;
  }

  getNeighbors(vertex) {
    if (!vertex) return;
    const edges = this.getEdges(vertex);
    if (edges) {
      return edges.map((edge) => edge.end);
    } else null;
  }

  getEdges(vertex) {
    return this.adjacencyList.get(vertex) ? this.adjacencyList.get(vertex): null;
  }

  size() {
    return this.adjacencyList.size;
  }

  breadthFirst(node) {
    const visitedVertex = new Map();
    const queue = new Queue();
    const ansArr = new Array();
    queue.enqueue(node);
    while (queue.front) {
      // while we have a queue with nodes...
      let dequeuedNode = queue.dequeue(); // dequeue front node
      ansArr.push(dequeuedNode); // add node to answer array
      visitedVertex.set(dequeuedNode, true);
      console.log(dequeuedNode);
      console.log(this.getEdges(dequeuedNode));
      let allNeighbors = this.getNeighbors(dequeuedNode); // get nodes neighbors
      console.log(allNeighbors);
      let neighborsToAdd = [];
      for (let i = 0; i < allNeighbors.length; i++) {
        // check if neighbors have been processed already
        if (!visitedVertex.has(allNeighbors[i])) {
          neighborsToAdd.push(allNeighbors[i]);
        }
      }
      for (let i = 0; i < neighborsToAdd.length; i++) {
        // put previously unprocessed neighbors in queue
        queue.enqueue(neighborsToAdd[i]);
      }
    }
    return ansArr;
  }
}

module.exports = Graph;
