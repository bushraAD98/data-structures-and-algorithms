'use strict';

const stackQueue = require('../stack-queue/pseudo-stack-queue');

describe('testing the pseudoQueue class',()=>{
    const psuedoQueueStack = new stackQueue();
    it('testing the new instace of stackQueue',()=>{
        expect(psuedoQueueStack).toBeInstanceOf(stackQueue);

    })
    it('testing queue method',()=>{
        psuedoQueueStack.enqueue('4');
        psuedoQueueStack.enqueue('3');
        psuedoQueueStack.enqueue('2');
        psuedoQueueStack.enqueue('1');
        console.log(psuedoQueueStack.stack1);
        expect(psuedoQueueStack.stack1.top.value).toBe('1'); 
        expect(psuedoQueueStack.stack2.top).toBeNull();
        
    })
    it('testing queue method',()=>{
            psuedoQueueStack.dequeue();
            psuedoQueueStack.dequeue();
            psuedoQueueStack.dequeue();
            psuedoQueueStack.dequeue();
            console.log(psuedoQueueStack.stack2);
            expect(psuedoQueueStack.stack2.top.value).toBe('4'); 
            expect(psuedoQueueStack.stack1.isEmpty).toBeTruthy; 
            
        })
})