# Trees
Binary tree data structure is a tree data structure where each element has at most 2 children. This data structure will consist of three primary elements:
- The data
- A pointer to the left child
- A pointer to the right child

A binary search tree is a binary tree data structure, based on nodes, that has specific properties that allow for operations such as searching and finding maximum or minimum values in a more efficient manner. The properties are as followed:
- The left child, and subsequently the left subtree, of a node contains only nodes with keys less than the node’s key
- The right child, and subsequently the right subtree, of a node contains only nodes with keys greater than the node’s key
- The subtrees must be binary search trees as well
- There are no duplicate nodes

## Challenge Summary :
The challenge asked us to create a binary-tree class with 3 methods :
- pre order
- in order
- post order
then to create a binary-search tree class that extends the binary tree class in addition to add & contains methods.

## Approach & Efficiency
loops/recursion 
time : o(n)
space : o(n)
