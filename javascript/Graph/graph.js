"use strict";

const LinkedList = require("../linked-list/index");
const Node = require("./node");
const Edge = require("./Edge");

class Graph {
  constructor() {
    this.adjacencyList = new LinkedList();
  }

  add_node(vertex) {
    vertex = new Node(vertex);
    this.adjacencyList.append(vertex);
  }

  add_edge(vertex1, vertex2, weight = 0) {
    let node = this.adjacencyList.head;

    while (node) {
      if (node.value.value === vertex1) {
        node.value.edges.push(new Edge(vertex2, weight));
      }
      node = node.next;
    }
  }
  get_Nodes() {
    let node = this.adjacencyList.head;
    let vertices = [];
    while (node) {
      vertices.push(node.value.value);
      node = node.next;
    }
    return vertices;
  }

  get_Neighbors(vertex) {
    if (!this.adjacencyList.head) return null;
    let node = this.adjacencyList.head;

    while (node) {
      if (node.value.value === vertex) {
        return node.value.edges;
      }
      node = node.next;
    }
  }

  size() {
    let node = this.adjacencyList.head;
    let size = 0;
    while (node) {
      size++;
      node = node.next;
    }
    return size;
  }
  

  businessTrip(graph, cities) {
    let cost = 0;
    for (let i = 0; i < cities.length; i++) {
      let neighbors = graph.get_Neighbors(cities[i]);
      for (let j = 0; j < neighbors.length; j++) {
        if (neighbors[j].vertex === cities[i + 1]) {
          cost += neighbors[j].weight;
        }
      }
    }
    if (cost === 0) return null;

    return cost;
  }

  depthFirst(vertex) {
    let result = [];
    let visited = {};

    const dfs = (vertex, visited, result) => {
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        let neighbors = this.get_Neighbors(vertex);
        for (let i = 0; i < neighbors.length; i++) {
          dfs(neighbors[i].vertex, visited, result);
        }
      }
    };
    dfs(vertex, visited, result);
    return result;
  }

  breadthFirst(start) {
    let queue = [];
    let visited = {};
    let result = [];
    let current;

    queue.push(start);
    while (queue.length) {
      current = queue.shift();
      result.push(current);
      let neighbors = this.get_Neighbors(current);

      for (let i = 0; i < neighbors.length; i++) {
        if (!visited[neighbors[i].vertex]) {
          queue.push(neighbors[i].vertex);
        }
      }
    }
    return result;
  }
}

// const g = new Graph();
// let ten;
//   let two;
//   let six;
//   let four;
//   let five;

//   ten = new Vertex(10);
//   two = new Vertex(2);
//   six = new Vertex(6);
//   four = new Vertex(4);
//   five = new Vertex(5);

//   g.add_node(10);
//   g.add_node(2);
//   g.add_node(6);
//   g.add_node(4);
//   g.add_node(5);
//   console.log(g);

//   g.add_edge(ten,two);
//   g.add_edge(two,six);
//   g.add_edge(two,four);
//   g.add_edge(four,five);
//   console.log(g);
//   console.log(g.get_Neighbors(two));
module.exports = Graph;
