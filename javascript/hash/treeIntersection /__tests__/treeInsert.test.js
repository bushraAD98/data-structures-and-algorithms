const {BT}=require('../binaryTree');
const Node = require('../../node');
const tree_intersection = require('../intersection');
let tree1 ;
let tree2 ;
let tree3 ;
describe('tree Intersection test', () => {
    let node1 = new Node(150);
    let node2 = new Node(100);
    let node3 = new Node(250);
    let node4 = new Node(75);
    let node5 = new Node(160);
    let node6 = new Node(200);
    let node7 = new Node(350);
    let node8 = new Node(125);
    let node9 = new Node(175);
    let node10 = new Node(300);
    let node11 = new Node(500);

    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node2.right = node5;
    node3.left = node6;
    node3.right = node7;
    node5.left = node8;
    node5.right = node9;
    node7.left = node10;
    node7.right = node11;
    tree1 = new BT(node1);
    let nodeOne = new Node(42);
    let nodeTwo = new Node(100);
    let nodeThree = new Node(600);
    let nodeFour = new Node(15);
    let nodeFive = new Node(160);
    let nodeSix = new Node(200);
    let nodeSeven = new Node(350);
    let nodeEight = new Node(125);
    let nodeNine = new Node(175);
    let nodeTen = new Node(4);
    let nodeeleven = new Node(500);

    nodeOne.left = nodeTwo;
    nodeOne.right = nodeThree;
    nodeTwo.left = nodeFour;
    nodeTwo.right = nodeFive;
    nodeThree.left = nodeSix;
    nodeThree.right = nodeSeven;
    nodeFive.left = nodeEight;
    nodeFive.right = nodeNine;
    nodeSeven.left = nodeTen;
    nodeSeven.right = nodeeleven;



    tree2 = new BT(nodeOne);
    tree3 = new BT();
  it ('should return [100,160,125,175,200,350,500]', () => {
      expect(tree_intersection(tree1,tree2)).toEqual([100,160,125,175,200,350,500]);
  })
    it ('edge case if one of the Trees is empty', () => {
        expect(tree_intersection(tree1,tree3)).toEqual("No intersection");
    })

})