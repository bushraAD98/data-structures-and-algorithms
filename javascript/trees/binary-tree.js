"use strict";
const stack = require("../linked-list/stack");
const node = require("./Node.js");

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder(root) {
    //root/left/right

    let result = [];
    let traverse = (node) => {
      result.push(node.value);
      if (node.left != null) traverse(node.left);
      if (node.right != null) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  inOrder() {
    //left/root/right
    let result = [];
    let traverse = (node) => {
      if (node.left != null) {
        traverse(node.left);
        result.push(node.value);
      }
      if (node.right != null) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  postOrder() {
    //left/right/root
    let result = [];
    let traverse = (node) => {
      if (node.left != null) traverse(node.left);
      if (node.right != null) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }
}

module.exports = BinaryTree ;