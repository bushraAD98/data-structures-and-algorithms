'use strict';

// Require our linked list implementation
const LinkedLilst = require('../index');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

it('test creating an instance of ll',()=>{
const ll = new LinkedLilst();
expect(ll).toBeInstanceOf(LinkedLilst);
expect(ll.head).toBeNull();
})
});

describe('isert to begining',()=>{
it('insert to an empty ll',()=>{
  const ll = new LinkedLilst();
  ll.insert('first');
  expect(ll.head.value).toEqual('first');
  expect(ll.head.next).toBeNull();

})
it('insert to non-empty ll',()=>{
  const ll = new LinkedLilst();
 ll.insert('first');
 ll.insert('second');
 expect(ll.head.value).toEqual('second');
 expect(ll.head.next.value).toEqual('first');

})

it('testing if specific value exsist',()=>{
  const ll = new LinkedLilst();
ll.insert('second');
ll.insert('first');
ll.includes('second');
ll.includes('first');
ll.includes('third');

expect(ll.includes('second')).toBeTruthy();
expect(ll.includes('first')).toBeTruthy();
expect(ll.includes('third')).toBeFalsy();
})

it('test appending value',()=>{
  const LL = new LinkedLilst() ;
  LL.append('first');
  LL.append('second');
  LL.append('third');
  expect(LL.head.value).toEqual('first');
  expect(LL.head.next.value).toEqual('second');
  expect(LL.head.next.next.value).toEqual('third');
  expect(LL.head.next.next.next).toBeNull();
})


it('test insert before specific node',()=>{
  const LL = new LinkedLilst() ;
 
  LL.insert('D')
  LL.insert('B')
  LL.insert('A')
  LL.insertBefore('D','C');// A,B,F,C,D
  expect(LL.head.value).toEqual('A');
  expect(LL.head.next.value).toEqual('B');
  expect(LL.head.next.next.value).toEqual('C');
  expect(LL.head.next.next.next.value).toEqual('D');
  expect(LL.head.next.next.next.next).toBeNull();
})

it('test insert after specific node ',()=>{
  const LL = new LinkedLilst() ;
  LL.insert('C')
  LL.insert('B')
  LL.insert('A')
  LL.insertAfter('C','D');// A,B,C,F,D
  expect(LL.head.value).toEqual('A');
  expect(LL.head.next.value).toEqual('B');
  expect(LL.head.next.next.value).toEqual('C');
  expect(LL.head.next.next.next.value).toEqual('D');
  expect(LL.head.next.next.next.next).toBeNull();
})

// it('string testing',()=>{
//   const ll = new LinkedLilst();

//   ll.insert('third');
//   ll.insert('second');
//   ll.insert('first');

// expect(ll.toString()).toEqual('{first} -> {second} -> {third} -> NULL')

// })

})
