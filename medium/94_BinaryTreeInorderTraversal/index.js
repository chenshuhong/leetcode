let Stack = require('../../datastruct/Stack')
let TreeNode = require('../../datastruct/TreeNode')
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
      stack.pop()
      if (treeNode.right&&!treeNode.rightVisited){
        treeNode.rightVisited = true
        stack.push(treeNode.right)
      }
    }
  }
  return array
};

module.exports = {
  inorderTraversal
}


/*let treeNode= new TreeNode(1)
treeNode.left = new TreeNode(2)
treeNode.left.left = new TreeNode(4)
treeNode.left.right = new TreeNode(5)
treeNode.right = new TreeNode(3)
treeNode.right.left = new TreeNode(6)
treeNode.right.right = new TreeNode(7)


console.log(inorderTraversal2(treeNode))*/

