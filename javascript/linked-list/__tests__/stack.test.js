'use strict';

const Stack = require('../stack');

describe('tseting the stack',()=>{

it('test creating a stack',()=>{
    const stack = new Stack();

    expect(stack).toBeDefined();
})


it('test pushing a new node',()=>{
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toBe(3);
    expect(stack.top.next.value).toBe(2);
    expect(stack.tail.value).toBe(1);

})


it('test popping the top node',()=>{
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
const s2 = new Stack();
expect(stack.pop()).toEqual(3);
    expect(stack.top.value).toBe(2);
    expect(stack.top.next.value).toBe(1);
   expect(s2.pop()).toBe('Exception!');
})
//LINE BY LINEEEEEEE
it('tset peak method',()=>{
    const stack = new Stack();
    const s2 = new Stack();
    stack.push('dawdyeh');
    stack.push('ahmad');
    stack.push('bushra');
    expect(s2.peak()).toBe('Exception!');
    expect(stack.peak().value).toBe('bushra');
})

it('tset isEmpty method',()=>{
    const stack = new Stack();
    const s2 = new Stack();
    stack.push(100);
  expect(s2.isEmpty()).toBe(true);
  expect(stack.isEmpty()).toBe(false);

})
























})