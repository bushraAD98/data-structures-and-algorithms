"use strict";
const Node = require("./node");
class LinkedList {
  constructor() {
    this.head = null; //null is falsy value
  }

  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      //!null = true means that the head is empty
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  includes(value) {
    let current = this.head;
    while (current != null) {
      if (current.value == value) return true;
      current = current.next;
    }
    return false;
  }

toString(){
    let string = '';
let current = this.head;
while(current != null){
string += `{${current.value} -> }`
current = current.next;
}
string += 'NULL';

}

}

module.exports = LinkedList;
