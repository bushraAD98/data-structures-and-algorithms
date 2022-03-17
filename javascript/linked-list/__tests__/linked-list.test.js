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
  const ll = new LinkedLilst() ;
  ll.append('first');
  ll.append('second');
  ll.append('third');
  expect(ll.head.value).toEqual('first');
  expect(ll.head.next.value).toEqual('second');
  expect(ll.head.next.next.value).toEqual('third');
  expect(ll.head.next.next.next).toBeNull();
})


it('test insert before specific node',()=>{
  const ll = new LinkedLilst() ;
 
  ll.insert('D')
  ll.insert('B')
  ll.insert('A')
  ll.insertBefore('D','C');// A,B,F,C,D
  expect(ll.head.value).toEqual('A');
  expect(ll.head.next.value).toEqual('B');
  expect(ll.head.next.next.value).toEqual('C');
  expect(ll.head.next.next.next.value).toEqual('D');
  expect(ll.head.next.next.next.next).toBeNull();
})

it('test insert after specific node ',()=>{
  const ll = new LinkedLilst() ;
  ll.insert('C')
  ll.insert('B')
  ll.insert('A')
  ll.insertAfter('C','D');// A,B,C,F,D
  expect(ll.head.value).toEqual('A');
  expect(ll.head.next.value).toEqual('B');
  expect(ll.head.next.next.value).toEqual('C');
  expect(ll.head.next.next.next.value).toEqual('D');
  expect(ll.head.next.next.next.next).toBeNull();
})


it('test the Kth method',()=>{
  const ll = new LinkedLilst() ;
  ll.append(-55);
  ll.append(12);
  ll.append(11);
  ll.append(66);
  ll.append(1);
  ll.append(33);
expect(ll.findKth(0)).toEqual(33);
expect(ll.findKth(1)).toEqual(1);
expect(ll.findKth(2)).toEqual(66);
expect(ll.findKth(3)).toEqual(11);
expect(ll.findKth(4)).toEqual(12);
expect(ll.findKth(5)).toEqual(-55);
expect(ll.findKth(8)).toEqual('exception')
})

// it('string testing',()=>{
//   const ll = new LinkedLilst();

//   ll.insert('third');
//   ll.insert('second');
//   ll.insert('first');

// expect(ll.toString()).toEqual('{first} -> {second} -> {third} -> NUll')

// })
it("zipLists method ", () => {
  const ll1 = new LinkedLilst();
  const ll2 = new LinkedLilst();
  ll1.insert(100);
  ll1.insert(22);
  ll1.insert(1);
  ll2.insert(12);
  ll2.insert(5);
  ll2.insert(60);


expect(ll1.zipLists(ll1,ll2)).toBe("{ 1 } -> { 60 } -> { 22 } -> { 5 } -> { 100 } -> { 12 } -> NULL")
})

})
