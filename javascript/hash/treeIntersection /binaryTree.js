'use strict'
const node = require('../node')
class BT {
    constructor(root = null) {
        this.root = root;
    }

    preOrder() {
        let arr = [];
        
        const recTraverse = (Node) => {

            arr.push(Node.value);

            if (Node.left != null) {
                recTraverse(Node.left);
            }
            if (Node.right != null) {
                recTraverse(Node.right);
            }
        }

        recTraverse(this.root)

        return arr;
    }
    inOrder() {
        let arr = [];

        const recTraverse = (Node) => {

            if (Node.left != null) {
                recTraverse(Node.left);
            }

            arr.push(Node.value);

            if (Node.right != null) {
                recTraverse(Node.right);
            }
        }
        recTraverse(this.root)

        return arr;
    }
    postOrder() {
        let arr = [];

        const recTraverse = (Node) => {

            if (Node.left != null) {
                recTraverse(Node.left);
            }

            if (Node.right != null) {
                recTraverse(Node.right);
            }

            arr.push(Node.value);

        }

        recTraverse(this.root)

        return arr;
    }

    breadthFirst() {

        if (!this.root) return "Empty tree"  // empty tree

        let arr = [];
        let queue = [];
        queue.push(this.root);

        while (queue.length > 0) {
            let current = queue.shift();
            arr.push(current.value);

            if (current.left) {     // check for left child
                queue.push(current.left);
            }
            if (current.right) {    // check for right child
                queue.push(current.right);  
            }
        }
        return arr;
    }

}

class BST extends BT {

    constructor(root = null) {
        super();
    }

    add(value) {

        const Node = new node(value);

        if (this.root === null) {
            this.root = Node;
            return this;
        }

        let current = this.root;

        while (current) {

            if (value < current.value) {
                if (current.left === null) {
                    current.left = Node;
                    return this;
                }
                current = current.left;

            }
            else {

                if (current.right === null) {
                    current.right = Node;
                    return this;
                }
                current = current.right;
            }
        }

    }
    contains(value) {

        if (this.root === null) {
            return false;
        }

        let current = this.root;

        while (current) {
            if (current.value === value) {
                return true;
            }
            if (value < current.value) {
                current = current.left;
            }

            if (value > current.value) {
                current = current.right;
            }

        }
        return false
    }
}
module.exports = { BT, BST };