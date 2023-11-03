'use strict';

function binaryTreeGreaterSum(binaryTree){
  let leftArray = binaryTree.preOrder(binaryTree.root.left);
  let rightArray = binaryTree.preOrder(binaryTree.root.right);
  let leftTotal = 0;
  for (let i = 0; i < leftArray.length; i++){
    leftTotal += leftArray[i];
  }
  let rightTotal = 0;
  for (let i = 0; i < rightArray.length; i++){
    rightTotal += rightArray[i];
  }
  return rightTotal > leftTotal ? 'right' : 'left';
}

module.exports = binaryTreeGreaterSum;
