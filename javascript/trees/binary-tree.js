"use strict";
const Node = require("./Node");

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    //root/left/right

    let result = [];
    let traverse = (Node) => {
      result.push(Node.value);
      if (Node.left != null) {
        traverse(Node.left);
      }
      if (Node.right != null) {
        traverse(Node.right);
      }
    };
    traverse(this.root);
    return result;
  }

  inOrder() {
    //left/root/right
    let result = [];
    const traverse = (Node) => {
      if (Node.left != null) {
        traverse(Node.left);
      }
      result.push(Node.value);

      if (Node.right != null) {
        traverse(Node.right);
      }
    };
    traverse(this.root);
    return result;
  }

  postOrder() {
    //left/right/root
    let result = [];
    let traverse = (Node) => {
      if (Node.left != null) traverse(Node.left);
      if (Node.right != null) traverse(Node.right);
      result.push(Node.value);
    };
    traverse(this.root);
    return result;
  }

findMax(){
if(!this.root) return 'Exception!';

let current = this.root.value;


let max = (Node) =>{
if(current < Node.value)
current = Node.value;
if(Node.left) 
  max(Node.left);
  if(Node.right)
  max(Node.right);
}
max(this.root);
return current;
}
}

class BinarySearchTree extends BinaryTree {
  constructor(root = null) {
    super();
  }

  add(value) {
    var node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (current) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  contains(value){
    if(!this.root) return false
    
    let current = this.root
    let found = false
    while(current && !found){
          if(value < current.value){
            current = current.left
           } else if(value > current.value){
              current = current.right
           } else {
                found = current
                return true
           } 
          
          }
  
      if(!found) return false;
    

}

 
}

module.exports = { BinaryTree, BinarySearchTree };
