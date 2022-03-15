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

  // toString() {
  //   let string = "";
  //   let current = this.head;
  //   while (current != null) {
  //     string += `{${current.value} -> }`;
  //     current = current.next;
  //   }
  //   string += "NULL";
  // }
  toString() {
    let string = "";
    if (this.head != null) {
        let current = this.head;
        while (current != null) {
            string = string + `{ ${current.value} } -> `;
            current = current.next;
        } string = string + "null";
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

    while (current) {
      nodes++;
      current = current.next;
    }
    if (k < 0 || k > nodes) {
      return "exception";
    }
    nodes = nodes - 1 - k;
    current = this.head;
    while (nodes !== 0) {
      current = current.next;

      nodes--;
    }

    return current.value;
  }
  reverse() {
    let ll = new lledList();
    let current = this.head;

    while (current) {


      ll.insert(current.value);

      current = current.next;
    }
    return ll;

  }



}

module.exports = LinkedList;
