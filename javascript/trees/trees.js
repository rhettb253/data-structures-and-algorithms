"use strict";

class BTNode {
  constructor(value, left = null, right = null) {
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

  getMax() {
    let nodeValues = this.preOrder(this.root);
    nodeValues.sort((a, b) => b - a);
    return nodeValues[0];
  }
}

class BinarySearchTree extends BinaryTree {
  add(value, startNode = this.root) {
    let newNode = new BTNode(value);
    // if there is no root/ no nodes on tree
    if (!this.root) {
      this.root = newNode;
      return;
    }

    // if the value to add is equivalent to another then exit because BSTrees only accept unique values
    if (value === startNode.value) return;

    // if value is less than node
    if (value < startNode.value) {
      if (startNode.left) this.add(value, startNode.left);
      else {
        startNode.left = newNode;
        return;
      }
    }

    // if value is greater than node
    if (value > startNode.value) {
      if (startNode.right) this.add(value, startNode.right);
      else {
        startNode.right = newNode;
        return;
      }
    }
  }

  contains(value) {
    let nodeValues = this.preOrder(this.root);
    return nodeValues.includes(value);
  }
}

module.exports = { BinarySearchTree, BinaryTree, BTNode };
