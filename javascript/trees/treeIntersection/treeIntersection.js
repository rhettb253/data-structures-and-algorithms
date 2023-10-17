'use strict';

function traverseTree(node, dictionary = {}) {
  if (!node.value) return dictionary;
  dictionary[node.value] = true;
  if (node.left) {
    traverseTree(node.left, dictionary);
  }
  if (node.right) {
    traverseTree(node.right, dictionary);
  }
  return dictionary;
}

function treeIntersection(treeOne, treeTwo) {
  let dictionaryOne = traverseTree(treeOne.root);
  let dictionaryTwo = traverseTree(treeTwo.root);
  let numArr = [];
  for (const prop in dictionaryOne) {
    if (dictionaryTwo[prop]) {
      let property = Number(prop);
      numArr.push(property);
    }
  }
  return numArr;
}

module.exports = {traverseTree, treeIntersection};
