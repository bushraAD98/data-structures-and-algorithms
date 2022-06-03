const HashMap = require('../hashmap');


  function tree_intersection(firstTree, secondTree) {
    const hashTable = new HashMap(20)
    let key;
    let counter = 0;
    let hash;
    let results = [];
    let traverseTree = (node) => {
      key = node.value;
      hashTable.set(key, "noValue");
      if (counter > 0) {
        typeof key == "number" ? (hash = key) : map.hash(key);
        if (hashTable.map[hash].head.next) {
          results.push(hash);
        }
      }
      if (node.left) {
        traverseTree(node.left);
      }
      if (node.right) {
        traverseTree(node.right);
      }
    };
    traverseTree(firstTree.root);
    counter++;
    traverseTree(secondTree.root);

    return results;
  }

  module.exports = tree_intersection;