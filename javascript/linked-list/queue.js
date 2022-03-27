'use strict';
const Node = require('./node');

class Queue {

constructor(){
    this.front = null ;
    this.back = null;
    this.size = 0;
}

enqueue(value){
const node = new Node(value);
if(!this.front){
this.front = node;
this.back = node;
}
else{
this.back.next = node;
this.back = node;
}
this.size ++;
}

dequeue(){
    let current = this.front;
    if(!this.front) return 'Exception!';
    
this.front = current.next;
this.size --;
return current.value;
    
}

peak(){
    if(!this.front) return 'Exception!';
    return this.front;
}

isEmpty(){
if(!this.front) return true;
return false;

}



}

module.exports = Queue;