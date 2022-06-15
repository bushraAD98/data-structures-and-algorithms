'use strict';

const Graph = require('../graph');


describe('Graph', () => {
  it('Node can be successfully added to the graph', () => {
    const graph = new Graph();
    graph.add_node('A');
    expect(graph.adjacencyList.head.value.value).toBe('A');
  });

  it('An edge can be successfully added to the graph', () => {
    const graph = new Graph();
    graph.add_node('A');
    graph.add_node('B');
    graph.add_edge('A', 'B');
    console.log(graph.adjacencyList.head.value.edges[0].vertex);
    expect(graph.adjacencyList.head.value.edges[0].vertex).toBe('B');
  });


  it('A collection of all nodes can be properly retrieved from the graph', () => {
    const graph = new Graph();
    graph.add_node('A');
    graph.add_node('B');
    graph.add_node('C');
    expect(graph.get_Nodes()).toEqual(['A', 'B', 'C']);
  });


  it('All appropriate neighbors can be retrieved from the graph and returned with the weight between nodes included', () => {
    const graph = new Graph();
    graph.add_node('A');
    graph.add_node('B');
    graph.add_node('C');
    graph.add_edge('A', 'B');
    graph.add_edge('A', 'C');
    expect(graph.get_Neighbors('A')).toEqual([
      { vertex: 'B', weight: 0 },
      { vertex: 'C', weight: 0 },
    ]);
  });


  it('The proper size is returned, representing the number of nodes in the graph', () => {
    const graph = new Graph();
    graph.add_node('A');
    graph.add_node('B');
    graph.add_node('C');
    expect(graph.size()).toBe(3);
  });


  it('A graph with only one node and edge can be properly returned', () => {
    const graph = new Graph();
    graph.add_node('A');
    graph.add_edge('A', 'B');
    expect(graph.get_Nodes()).toEqual(['A']);
    expect(graph.get_Neighbors('A')).toEqual([{ vertex: 'B', weight: 0 }]);
  });


  it('An empty graph properly returns null', () => {
    const graph = new Graph();
    expect(graph.get_Neighbors('A')).toBe(null);
  });

  it(' depth-first', ()=>{
    const graph = new Graph();
    graph.add_node('A');
    graph.add_node('B');
    graph.add_node('C');
    graph.add_node('D');
    graph.add_node('E');
    graph.add_edge('A', 'B');
    graph.add_edge('A', 'C');
    graph.add_edge('B', 'D');
    graph.add_edge('C', 'E');
    expect(graph.depthFirst('A')).toEqual(['A', 'B', 'D', 'C', 'E']);
  });

  it('breadth first', () => {
    const graph = new Graph();

    graph.add_node('A');
    graph.add_node('B');
    graph.add_node('C');
    graph.add_node('D');
    graph.add_node('E');

    graph.add_edge('A', 'B');
    graph.add_edge('A', 'C');
    graph.add_edge('B', 'D');
    graph.add_edge('C', 'E');

    expect(graph.breadthFirst('A')).toEqual(['A', 'B', 'C', 'D', 'E']);
  });

  // business trip test is added 

  it('businessTrips that returns the cost or null', () => {
    const graph = new Graph();
    graph.add_node('Pandora');
    graph.add_node('Arendelle');
    graph.add_node('Metroville');
    graph.add_node('Monstropolis');
    graph.add_node('Naboo');
    graph.add_node('Narnia');
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
  
});