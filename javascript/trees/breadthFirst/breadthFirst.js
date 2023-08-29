const { Queue } = require('../../stack-and-queue');

function breadthFirst (tree) {
  let returnArray = [];
  if (!tree.root.value) return null;
  if (!tree.root.left && !tree.root.right) {
    return returnArray.push(tree.root.value);
  }
  const nodeQueue = new Queue();
  nodeQueue.enqueue(tree.root.value);
  while (!nodeQueue.isEmpty()) {
    let node = nodeQueue.dequeue();
    returnArray.push(node);
    if (node.left) nodeQueue.enqueue(node.left);
    if (node.right) nodeQueue.enqueue(node.right);
  }
  return returnArray;
}

module.exports = breadthFirst;
