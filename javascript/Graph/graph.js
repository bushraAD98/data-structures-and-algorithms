"use strict";

const Edge = require("./Edge");
const Vertex = require("./Vertex");
const node = new Vertex();
class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }

  add_node(node) {
    // we need to add the node to the adjacency list and set an empty array for the edges
    this._adjacencyList.set(node, []);
    return node;
  }

  add_edge(start_node, end_node) {
    if (
      !this._adjacencyList.has(start_node) ||
      !this._adjacencyList.has(end_node)
    ) {
      return "Invalid vertex";
    }
    const adjacencies = this._adjacencyList.get(start_node);
    adjacencies.push(new Edge(end_node));
    console.log({adjacencies});
  }

  get_nodes() {
    let str = "";
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      let edg;
      if (edge[0]) {
        edg = "";
        for (let i = 0; i < edge.length; i++) {
          edg += `${edge[i].vertex.value},`;
        }
      } else {
        edg = edge;
      }
      str = str + ` Vertex ${vertex["value"]} => edge ${edg} ||`;
    }
    return str;
  }

  get_Neighbors(node) {
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      if (vertex === node) {
        return edge;
      }
    }
  }

  size() {
    if (this._adjacencyList.size > 0) {
      return this._adjacencyList.size;
    } else {
      return null;
    }
  }

  businessTrip(graph, cities) {
    let cost = 0;
    for (let i = 0; i < cities.length; i++) {
        let neighbors = graph. get_Neighbors(cities[i]);
        for (let j = 0; j < neighbors.length; j++) {
            if (neighbors[j].vertex === cities[i + 1]) {
                cost += neighbors[j].weight;
            }
        }
    }
    if (cost === 0) return null

    return cost;
}

depthFirst(vertex){
  let result = [];
  let visited = {};

  const dfs=(vertex, visited, result)=>{
    if(!visited[vertex]){
      visited[vertex] = true;
      result.push(vertex);
      let neighbors = this.get_Neighbors(vertex);
      for(let i=0; i<neighbors.length; i++){
        dfs(neighbors[i].vertex, visited, result);
      }
    }
  };
  dfs(vertex, visited, result);
  return result;
}
}

const g = new Graph();
let ten;
  let two;
  let six;
  let four;
  let five;

  ten = new Vertex(10);
  two = new Vertex(2);
  six = new Vertex(6);
  four = new Vertex(4);
  five = new Vertex(5);

  g.add_node(10);
  g.add_node(2);
  g.add_node(6);
  g.add_node(4);
  g.add_node(5);
  console.log(g);

  g.add_edge(ten,two);
  g.add_edge(two,six);
  g.add_edge(two,four);
  g.add_edge(four,five);
  console.log(g);
  console.log(g.get_Neighbors(two));
module.exports = Graph;
