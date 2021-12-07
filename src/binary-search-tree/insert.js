function createBinarySearchTree(initKeyList) {
  let root = null;

  if (Array.isArray(initKeyList) && initKeyList.length > 0) {
    initKeyList.forEach((key) => {
      root = insert(root, key);
    });
  }

  function insert(node, key) {
    const newNode = {
      key,
      left: null,
      right: null,
    };

    // base case
    if (node == null) return newNode;
    if (node.key === key) return node;

    if (key > node.key) {
      node.right = insert(node.right, key);
    } else if (key < node.key) {
      node.left = insert(node.left, key);
    }

    return node;
  }

  return {
    root,
    insert,
  };
}

// const binarySearchTree = createBinarySearchTree([10, 7, 15]);
// console.log(binarySearchTree.root);

const binarySearchTree = createBinarySearchTree([10, 7, 15, 5, 9, 20, 13, 17]);
console.log(binarySearchTree.root);
