const {BinarySearchTree, BinaryTree} = require('../trees');

describe('binary trees', ()=> {
  test('traversal works with an empty tree', ()=> {
    let emptyBiTree = new BinaryTree();
    let emptyAnsArrPre = emptyBiTree.preOrder(emptyBiTree.root);
    let emptyAnsArrIn = emptyBiTree.inOrder(emptyBiTree.root);
    let emptyAnsArrPost = emptyBiTree.postOrder(emptyBiTree.root);
    expect(emptyAnsArrPre).toEqual([]);
    expect(emptyAnsArrIn).toEqual([]);
    expect(emptyAnsArrPost).toEqual([]);
  });
  test('traversal works with soley a root node', ()=> {
    let singleBiTree = new BinaryTree(10);
    let singleAnsArrPre = singleBiTree.preOrder(singleBiTree.root);
    let singleAnsArrIn = singleBiTree.inOrder(singleBiTree.root);
    let singleAnsArrPost = singleBiTree.postOrder(singleBiTree.root);
    expect(singleAnsArrPre).toEqual([10]);
    expect(singleAnsArrIn).toEqual([10]);
    expect(singleAnsArrPost).toEqual([10]);
  });
  test('traversal works on a full tree', ()=> {
    let fullBiTree = new BinaryTree(10);
    let ansArrPre = fullBiTree.preOrder(fullBiTree.root);
    let ansArrIn = fullBiTree.inOrder(fullBiTree.root);
    let ansArrPost = fullBiTree.postOrder(fullBiTree.root);
    expect(ansArrPre[0]).toEqual(10);
    expect(ansArrIn[0]).toEqual(10);
    expect(ansArrPost[0]).toEqual(10);
  });
  test('traversal works on a full tree: part two', ()=> {
    let fullBiTree = new BinaryTree(10);
    fullBiTree.root.left = {value: 5, left: {value: 3, left: null, right: null}, right: {value: 7, left: null, right: null}};
    fullBiTree.root.right = {value: 15, left: null, right: {value: 17, left: null, right: null}};
    let ansArrPre = fullBiTree.preOrder(fullBiTree.root);
    // let ansArrIn = fullBiTree.inOrder(fullBiTree.root);
    // let ansArrPost = fullBiTree.postOrder(fullBiTree.root);
    expect(ansArrPre).toEqual([10, 5, 3, 7, 15, 17]);
    // expect(ansArrIn).toEqual([]);
    // expect(ansArrPost).toEqual([]);
  });
  test('binary search trees can add nodes in appropriate place with one arguement', () => {
    let biSearchTree = new BinarySearchTree(10);
    biSearchTree.root.left = {value: 5, left: {value: 3, left: null, right: null}, right: {value: 7, left: null, right: null}};
    biSearchTree.root.right = {value: 15, left: null, right: {value: 17, left: null, right: null}};
    biSearchTree.add(16);
    expect(biSearchTree.root.right.right.left.value).toEqual(16);
  });
  test('binary search trees can add nodes in appropriate place with two arguements', () => {
    let biSearchTree = new BinarySearchTree(10);
    biSearchTree.root.left = {value: 5, left: {value: 3, left: null, right: null}, right: {value: 7, left: null, right: null}};
    biSearchTree.root.right = {value: 15, left: null, right: {value: 17, left: null, right: null}};
    biSearchTree.add(1, biSearchTree.root);
    expect(biSearchTree.root.left.left.left.value).toEqual(1);
  });
  test('binary search trees can add nodes in appropriate place: check two', () => {
    let biSearchTree = new BinarySearchTree(10);
    biSearchTree.root.left = {value: 5, left: {value: 3, left: null, right: null}, right: {value: 7, left: null, right: null}};
    biSearchTree.root.right = {value: 15, left: null, right: {value: 17, left: null, right: null}};
    biSearchTree.add(16, biSearchTree.root);
    expect(biSearchTree.root.right.right.left.value).toEqual(16);
  });
  test('binary search trees can add nodes in appropriate place starting off of root', () => {
    let biSearchTree = new BinarySearchTree(10);
    biSearchTree.root.left = {value: 5, left: {value: 3, left: null, right: null}, right: {value: 7, left: null, right: null}};
    biSearchTree.root.right = {value: 15, left: null, right: {value: 17, left: null, right: null}};
    biSearchTree.add(1, biSearchTree.root.left);
    expect(biSearchTree.root.left.left.left.value).toEqual(1);
  });
  test('contains method on binary search trees works', () => {
    let biSearchTree = new BinarySearchTree(10);
    biSearchTree.root.left = {value: 5, left: {value: 3, left: null, right: null}, right: {value: 7, left: null, right: null}};
    biSearchTree.root.right = {value: 15, left: null, right: {value: 17, left: null, right: null}};
    expect(biSearchTree.contains(15)).toBe(true);
    expect(biSearchTree.contains(3)).toBe(true);
    expect(biSearchTree.contains(100)).toBe(false);
  });
  test('getMax method works', ()=> {
    let biSearchTree = new BinarySearchTree(10);
    biSearchTree.root.left = {value: 5, left: {value: 3, left: null, right: null}, right: {value: 7, left: null, right: null}};
    biSearchTree.root.right = {value: 15, left: null, right: {value: 17, left: null, right: null}};
    expect(biSearchTree.getMax()).toEqual(17);
  });
});
