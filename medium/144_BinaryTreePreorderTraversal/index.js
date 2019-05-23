let TreeNode = require('../../datastruct/TreeNode')
let Stack = require('../../datastruct/Stack')
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root,array=[]) {
  if (root){
    array.push(root.val)
    root.left&&preorderTraversal(root.left,array)
    root.right&&preorderTraversal(root.right,array)
  }
  return array
};


var preorderTraversal2 = function(root) {
  let array = [],stack = new Stack()
  while (root){
    array.push(root.val)
    root.right&&stack.push(root.right)
    root = root.left
    if (!root&&!stack.isEmpty()){
      root = stack.pop()
    }
  }
  return array
};
