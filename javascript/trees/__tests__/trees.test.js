"use strict";


const { it } = require("eslint/lib/rule-tester/rule-tester");
const {BinaryTree,BinarySearchTree} = require("../binary-tree");
const Node = require("../Node");
let tree = null;


describe("Binary tree testing", () => {
  beforeAll(() => {
    let ten = new Node(10);
    let fifteen = new Node(15);
    let seven = new Node(7);
    let twelve = new Node(12);
    let five = new Node(5);
    let nine = new Node(9);

    ten.left = seven;
    ten.right = fifteen;
    fifteen.left = twelve;
    seven.left = five;
    seven.right = nine;
    tree = new BinaryTree(ten);
   
  });
  it('test the root value',()=>{
    expect(tree.root.value).toBe(10);
  })

it('test the pre-order function',()=>{
let result = [10,7,5,9,15,12]
// expect(tree.preOrder()).toStrictEqual([10,7,5,9,15,12])
expect(tree.preOrder()).toEqual(result);


})

it('testing in-order method',()=>{

let result = [5,7,9,10,12,15]
expect(tree.inOrder()).toEqual(result);

})

it('testing post-order method',()=>{
let result = [5,9,7,12,15,10]
expect(tree.postOrder()).toEqual(result);

})
it('test finding the max node in BT',()=>{

    expect(tree.findMax()).toEqual(15);


})
});


describe('binary search tree',()=>{

it('test adding to the tree',()=>{
    const tree2 = new BinarySearchTree();
    tree2.add(50);
    tree2.add(55);
    tree2.add(44);
    tree2.add(30);
    expect(tree2.root.value).toEqual(50);

})

it('test if specific node exists in the tree',()=>{
    const tree2 = new BinarySearchTree();
    tree2.add(50);
    tree2.add(55);
    tree2.add(44);
    tree2.add(30);

expect(tree2.contains(55)).toBe(true);
expect(tree2.contains(-77)).toBe(false);
})





})
