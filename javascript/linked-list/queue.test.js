"use strict";

const Queue = require("../linked-list/queue");

describe("testing queue", () => {
  it("test creating new queue", () => {
    const queue = new Queue();
    expect(queue).toBeDefined();
  });

  it("test adding new node to the queue", () => {
    const queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(2);
    queue.enqueue(1);

    expect(queue.front.value).toBe(3)
    expect(queue.front.next.value).toBe(2)
    expect(queue.back.value).toBe(1)

  });

  it("test deleting the first node in the queue", () => {
    const queue = new Queue();
    const q = new Queue();
    queue.enqueue(3);
    queue.enqueue(2);
    queue.enqueue(1);
expect(queue.dequeue()).toBe(3);
expect(q.dequeue()).toBe('Exception!');
  });

  it("test returning the first node in the queue", () => {
    const queue = new Queue();
    const q = new Queue();
    queue.enqueue(3);
    queue.enqueue(2);
    queue.enqueue(1);
expect(queue.dequeue()).toBe(3);
expect(q.dequeue()).toBe('Exception!');
  });


  
it('tset isEmpty method',()=>{
  const queue = new Queue();
  const q = new Queue();
  queue.enqueue(100);
expect(q.isEmpty()).toBe(true);
expect(queue.isEmpty()).toBe(false);

})

});
