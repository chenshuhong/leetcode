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
var inorderTraversal = function(root,array=[]) {
  if (root){
    root.left&&inorderTraversal(root.left,array)
    array.push(root.val)
    root.right&&inorderTraversal(root.right,array)
  }
  return array
};

var inorderTraversal2 = function(root) {
  let array =[]
  let stack = new Stack()
  root&&stack.push(root)
  while (!stack.isEmpty()){
    let treeNode = stack.top()
    if (treeNode.left&&!treeNode.leftVisited){
      treeNode.leftVisited = true
      stack.push(treeNode.left)
    }else {
      array.push(treeNode.val)
      if (treeNode.right&&!treeNode.rightVisited){
        treeNode.rightVisited = true
        stack.push(treeNode.right)
      } else {
        stack.pop()
      }
    }
  }
  return array
};
