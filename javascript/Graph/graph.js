
'use strict';

const Edge = require('./Edge');
const Vertex = require('./Vertex');


class Graph{

        constructor() {
            this._adjacencyList = new Map();

        }

        add_node(node) {
            // we need to add the node to the adjacency list and set an empty array for the edges
            this._adjacencyList.set(node, []);
            return node;
          }

          add_edge(start_node,end_node) {
            if (
                !this._adjacencyList.has(start_node) ||
                !this._adjacencyList.has(end_node)
              ) {
                return "Invalid vertex";
              }
              const adjacencies = this._adjacencyList.get(start_node);
              adjacencies.push(new Edge(end_node));
            }

            get_nodes(){
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
            }
          



module.exports = Graph;