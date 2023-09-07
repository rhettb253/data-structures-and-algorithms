'use strict';

function fizzBizzTree(myKAryTree){
  let nodeQueue = [];
  nodeQueue.push(myKAryTree.root);
  while (nodeQueue.length) {
    let poppedNode = nodeQueue.pop();
    if (poppedNode.children.length) poppedNode.children.forEach(child => nodeQueue.unshift(child));
    if (poppedNode.value % 3 === 0 && poppedNode.value % 5 === 0) {
      poppedNode.value = 'FizzBuzz';
    } else if (poppedNode.value % 3 === 0) {
      poppedNode.value = 'Fizz';
    } else if (poppedNode.value % 5 === 0) {
      poppedNode.value = 'Buzz';
    } else {
      poppedNode.value = poppedNode.value.toString();
    }
  }
}

module.exports = fizzBizzTree;

