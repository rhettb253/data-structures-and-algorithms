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

  addVertex(value){
    const vertex = new Node(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addEdge(start, end, weight){
    //unidirectional
    if(!this.adjacencyList.has(start) || !this.adjacencyList.has(end)){
      Error('invalid verticies');
    }
    let edges = this.adjacencyList.get(start);
    const newEdge = new Edge(start, end, weight);
    edges.push(newEdge);
  }

  addUndirectedEdge(start, end, weight){
    this.addEdge(start, end, weight);
    this.addEdge(end, start, weight);
  }

  getVerticies(){
    const vertexArr = [];
    this.adjacencyList.forEach((_, key) => vertexArr.push(key)); //mak it key.value to get the value of the key object
    return vertexArr;
  }

  getNeighbors(vertex){
    if (!vertex) return;
    const edges = this.getEdges(vertex);
    if (edges){
      return edges.map(edge => edge.to);
    } else null;
  }

  getEdges(vertex){
    return this.adjacencyList.get(vertex) ? this.adjacencyList.get(vertex) : null;
  }

  size(){
    return this.adjacencyList.size;
  }
}

module.exports = Graph;
