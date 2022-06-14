'use strict';

const Graph = require('../graph');
const Vertex = require('../Vertex');
const Edge = require('../Edge');


describe("GRAPH TESTS", () => {
    let graph;
    let ten;
    let two;
    let six;
    let four;
    let five;
    beforeAll(() => {
      graph = new Graph();
      ten = new Vertex(10);
      two = new Vertex(2);
      six = new Vertex(6);
      four = new Vertex(4);
      five = new Vertex(5);
  
      graph.add_node(ten);
      graph.add_node(two);
      graph.add_node(six);
    });
    it("1.Node can be successfully added to the graph", () => {
      expect(graph.add_node(four)).toEqual({ value: 4 });
    });


    it("2.An edge can be successfully added to the graph", () => {
      graph.  add_edge(ten, two);
      expect(graph.  add_edge(five, two)).toEqual("Invalid vertex");
      expect(graph._adjacencyList.get(ten)).toEqual([
        { vertex: { value: 2 }, weight: 0 },
      ]);
    });


  
    it("3.A collection of all nodes can be properly retrieved from the graph", () => {
      expect(graph. get_nodes()).toEqual(
        " Vertex 10 => edge 2, || Vertex 2 => edge  || Vertex 6 => edge  || Vertex 4 => edge  ||"
      );
    });


  
    it("4.All appropriate neighbors can be retrieved from the graph", () => {
      graph.  add_edge(ten, six);
      graph.  add_edge(two, four);
      graph.  add_edge(four, ten);
  
      expect(graph. get_nodes()).toEqual(
        " Vertex 10 => edge 2,6, || Vertex 2 => edge 4, || Vertex 6 => edge  || Vertex 4 => edge 10, ||"
      );

      expect(graph.get_Neighbors(ten)).toEqual([
        { vertex: { value: 2 }, weight: 0 },
        { vertex: { value: 6 }, weight: 0 },
      ]);
      expect(graph.get_Neighbors(four)).toEqual([
        { vertex: { value: 10 }, weight: 0 },
      ]);
    });


  
    it("5.Neighbors are returned with the weight between nodes included", () => {
      expect(graph. get_nodes()).toEqual(
        " Vertex 10 => edge 2,6, || Vertex 2 => edge 4, || Vertex 6 => edge  || Vertex 4 => edge 10, ||"
      );
      expect(graph.get_Neighbors(two)).toEqual([
        { vertex: { value: 4 }, weight: 0 },
      ]);
      expect(graph.get_Neighbors(six)).toEqual([]);
    });


  
    it("6.A graph with only one node and edge can be properly returned", () => {
      let graphPrinted;
      if (graph._adjacencyList.has(ten)) {
        graphPrinted = graph. get_nodes();
      }
      expect(graphPrinted).toEqual(
        " Vertex 10 => edge 2,6, || Vertex 2 => edge 4, || Vertex 6 => edge  || Vertex 4 => edge 10, ||"
      );
    
    });
  
    it("7.An empty graph properly returns null", () => {
      let emptyGraph = new Graph();
      expect(graph.size()).toEqual(4);
      expect(emptyGraph.size()).toEqual(null);
    });

    it('businessTrips that returns the cost or null', () => {
      const graph = new Graph();
      graph. add_node('Pandora');
      graph. add_node('Arendelle');
      graph. add_node('Metroville');
      graph. add_node('Monstropolis');
      graph. add_node('Naboo');
      graph. add_node('Narnia');
      graph.add_edge('Pandora', 'Arendelle', 150);
      graph.add_edge('Pandora', 'Metroville', 82);
      graph.add_edge('Arendelle', 'Monstropolis', 42);
      graph.add_edge('Arendelle', 'Metroville', 99);
      graph.add_edge('Metroville', 'Monstropolis', 105);
      graph.add_edge('Metroville', 'Naboo', 26);
      graph.add_edge('Monstropolis', 'Naboo', 73);
      graph.add_edge('Naboo', 'Narnia', 250);
      graph.add_edge('Monstropolis', 'Narnia', 37);
  
      expect(graph.businessTrip(graph, ['Pandora', 'Metroville'])).toBe(82);
      expect(graph.businessTrip(graph, ['Arendelle', 'Monstropolis', 'Naboo'])).toBe(115);
      expect(graph.businessTrip(graph, ['Pandora', 'Arendelle', 'Metroville', 'Naboo'])).toBe(275);
      expect(graph.businessTrip(graph, ['Pandora', 'Narnia'])).toBe(null);
    });


    it('DEPTH-FIRST-TEST', ()=>{
      const graph = new Graph();
      graph. add_node('A');
      graph. add_node('B');
      graph. add_node('C');
      graph. add_node('D');
      graph. add_node('E');
      graph.add_edge('A', 'B');
      graph.add_edge('A', 'C');
      graph.add_edge('B', 'D');
      graph.add_edge('C', 'E');
      expect(graph.depthFirst('A')).toEqual(['A', 'B', 'D', 'C', 'E']);
    });
  });