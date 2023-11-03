const { BinaryTree } = require('../trees');
const binaryTreeGreaterSum = require('./greaterSum');

let biTree = new BinaryTree(0);

biTree.root.left = {
  value : 1,
  left : null,
  right : null,
};

biTree.root.right = {
  value : 2,
  left : null,
  right : null,
};

let biTree2 = new BinaryTree(0);

biTree2.root.left = {
  value : 2,
  left : {
    value: 10,
    left: null,
    right: null,
  },
  right : {
    value: 10,
    left: null,
    right: null,
  },
};

biTree2.root.right = {
  value : 1,
  left : {
    value: 10,
    left: null,
    right: null,
  },
  right : {
    value: 10,
    left: null,
    right: null,
  },
};


test('greaterSum function returns correct side', () => {
  expect(binaryTreeGreaterSum(biTree)).toEqual('right');
});

test('greaterSum function works on another tree', () => {
  expect(binaryTreeGreaterSum(biTree2)).toEqual('left');
});
