'use strict';

class BTNode {
  constructor(value, left = null, right = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = new BTNode(root);
  }

  preOrder(node, nodeArray = []) {
    if (!node.value) {
      return nodeArray;
    }
    //process
    nodeArray.push(node.value);
    //go left
    if (node.left) {
      this.preOrder(node.left, nodeArray);
    }
    //go right
    if (node.right) {
      this.preOrder(node.right, nodeArray);
    }
    return nodeArray;
  }

  inOrder(node, nodeArray = []) {
    if (!node.value) {
      return nodeArray;
    }
    //go left
    if (node.left) {
      this.preOrder(node.left, nodeArray);
    }
    //process
    nodeArray.push(node.value);
    //go right
    if (node.right) {
      this.preOrder(node.right, nodeArray);
    }
    return nodeArray;
  }

  postOrder(node, nodeArray = []) {
    if (!node.value) {
      return nodeArray;
    }
    //go left
    if (node.left) {
      this.preOrder(node.left, nodeArray);
    }
    //go right
    if (node.right) {
      this.preOrder(node.right, nodeArray);
    }
    //process
    nodeArray.push(node.value);
    return nodeArray;
  }
}

// class BinarySearchTree {
//   constructor(){

//   }

//   insert(value){
//     let newNode = new BTNode(value);
//     if (!this.root){ this.root = newNode; return; }

//     let _insert = (node) => {
//       if (!node.left) {node.left = newNode;}
//       if (newNode.value < node.value) {
//         node.left = newNode;
//       }
//       if (value > node.value) {

//       }

//     }

//     _insert(this.root);
//   }
// }

module.exports = {BinaryTree, BTNode};
