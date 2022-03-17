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

  toString() {
    let string = "";
    if (this.head != null) {
        let current = this.head;
        while (current != null) {
            string = string + `{ ${current.value} } -> `;
            current = current.next;
        } string = string + "NULL";
        return string;
    } else {
        return "empty Linked List";
    }
}

  append(newValue) {
    const node = new Node(newValue);
    let current = this.head;
    if (this.head == null) {
      this.head = node;
    } else {
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
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

  findKth(k) {
    let current = this.head;
    let nodes = 0;


while(current ){
nodes ++;
current = current.next;

}
if (k < 0 || k > nodes) {
  return "exception";
}
nodes = nodes-1-k;
current = this.head;
    while (nodes !==0) {
        current = current.next;

      nodes --;  
      }
     
    

    return current.value;
  }
  
  zipLists(l1, l2) {
    let size =0;
    let temp1 = l1.head;
    let temp2 = l2.head;
    while (l2.head != null && temp1 != null) {
        l2.head = l2.head.next;
        temp2.next = temp1.next;
        temp1.next = temp2;
        temp2 = l2.head;
        temp1 = temp1.next.next;
        size ++;
    }
    while (l2.head != null) { l1.append(l2.head.value); l2.head = l2.head.next; }
    size ++;
    return l1.toString();
}

}

module.exports = LinkedList;
