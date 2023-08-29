const {BinaryTree} = require('../../trees');
const breadthFirst = require('../breadthFirst');

describe('breadth first traversal', ()=> {
  test('traversal works on a standard binary tree', ()=> {
    let biTree = new BinaryTree(1);
    biTree.root.left = {value: 2, left: {value: 4, left: null, right: null}, right: {value: 5, left: null, right: null}};
    biTree.root.right = {value: 3, left: null, right: {value: 6, left: null, right: null}};
    expect(breadthFirst(biTree)).toEqual([1,2,3,4,5,6]);
  });

});
