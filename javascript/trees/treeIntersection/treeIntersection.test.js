const {traverseTree, treeIntersection} = require('./treeIntersection');

const tree1 = {
  root: {
    value: 1,
    left: {
      value: 2,
      left: null,
      right: null
    },
    right: {
      value: 3,
      left: null,
      right: null
    }
  }
};

const tree2 = {
  root: {
    value: 1,
    left: {
      value: 4,
      left: null,
      right: null
    },
    right: {
      value: 5,
      left: null,
      right: null
    }
  }
};

const tree3 = {
  root: {
    value: null
  }
};

test('traversal works', () => {
  let dictionary = traverseTree(tree1.root);
  expect(dictionary).toEqual({"1": true, "2": true, "3": true});
});

test('returning matching numbers from both trees works', () => {
  let ans = treeIntersection(tree1, tree2);
  expect(ans).toEqual([1]);
});

test('again', () => {
  let ans = treeIntersection(tree1, tree1);
  console.log(ans);
  expect(ans).toEqual([1,2,3]);
});

test('works w no matching numbers', () => {
  let ans = treeIntersection(tree1, tree3);
  expect(ans).toEqual([]);
});
