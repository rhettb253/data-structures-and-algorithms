const {BinaryTree} = require('../trees');

let emptyBiTree = new BinaryTree();
let fullBiTree =  {value: 10, left: {value: 5, left: {value: 3, left: null, right: null}, right: {value: 7, left: null, right: null}}, right: {value: 15, left: null, right: {value: 17, left: null, right: null}}};

describe('binary trees', ()=> {
  test('traversal works with an empty tree', ()=> {
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
});
