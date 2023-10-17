# Tree Intersection

This JavaScript module provides two functions for finding the intersection of values between two binary trees. It can be used to efficiently identify common values in two binary trees.

## Functions

### traverseTree(node, dictionary)

This function is used internally to traverse a binary tree and collect its values in a dictionary.

#### Parameters

node: The starting node of the tree to be traversed.
dictionary (optional): A dictionary used to accumulate the values found in the tree.

#### Returns

Returns the dictionary containing the values collected from the tree.

### treeIntersection(treeOne, treeTwo)

This function takes two binary trees and returns an array of values that are common to both trees.

#### Parameters

treeOne: The first binary tree.

treeTwo: The second binary tree.

#### Returns
Returns an array of common values found in both binary trees.
