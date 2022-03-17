'use strict';

const Node = require('./node');

class Stack {

constructor(){
this.top = null;
this.tail = null;
this.size = 0;

}

push(value){
let node = new Node (value);
if(!this.top){
    this.top = node;
    this.tail = node;
}
else{
    node.next = this.top;
    this.top = node; 


}
this.size ++;
}

pop(){
let current = this.top;
if(!this.top) return"Exception!";
else{

current = this.top;
this.top = current.next;
this.size --;
return current.value

}}
peak(){
if(!this.top) return "Exception!";
return this.top;
}
isEmpty(){
    if(!this.top) return true;
    else return false;
}
}

module.exports = Stack;
















