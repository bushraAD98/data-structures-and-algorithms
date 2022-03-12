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

append(newValue) {
  const node = new Node(newValue);
  let current = this.head;
  if (this.head == null) {
      this.head = node;
  } else {
      while (current.next != null) {
          current = current.next;
      } current.next = node;
  }
}


insertBefore(previous, newValue) {
  const node = new Node(newValue);
  let current = this.head;
  while (current.next != null) {
      current = current.next;
      if (current.next.value == previous) {
          node.next = current.next;
          current.next = node;
          return null;
      }
  }
}

insertAfter(previous, newValue) {
  const node = new Node(newValue);
  let current = this.head;
  while (current.next != null) {
      current = current.next;
      if (current.value == previous) {
          node.next = current.next;
          current.next = node;
          return null;
      }
  }

}



}

module.exports = LinkedList;
