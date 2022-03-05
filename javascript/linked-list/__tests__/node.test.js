'use strict';

const Node = require('../node.js');

describe('test Node class',()=>{
it('test creating node',()=>{
    const value ='';
    const node = new Node(value);
    expect(node).toBeInstanceOf(Node);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();

})



})