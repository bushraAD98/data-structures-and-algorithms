const HashMap = require('../hashmap')

function tree_intersection(tree1, tree2) {
    if (!tree1.root || !tree2.root) return "No intersection"


    const hashTable = new HashMap(13)

    let result = []
    let tree1PreOrder = tree1.preOrder()
    let tree2PreOrder = tree2.preOrder()

    for (let i = 0; i < tree2PreOrder.length; i++) {
        hashTable.set(tree2PreOrder[i], [i])
    }

    for (let i = 0; i < tree1PreOrder.length; i++) {
        if (hashTable.contains(tree1PreOrder[i])) {
            result.push(tree1PreOrder[i])
        }
    }
    return result
}
module.exports = tree_intersection