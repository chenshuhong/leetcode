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
var postorderTraversal = function(root,array=[]) {
  if (root){
    root.left&&postorderTraversal(root.left,array)
    root.right&&postorderTraversal(root.right,array)
    array.push(root.val)
  }
  return array
};


var postorderTraversa2 = function(root) {
  let array = []
  let stack = new Stack()
  root&&stack.push(root)
  while (!stack.isEmpty()){
    debugger
    root = stack.top()
    if ((root.right||root.left)&&!root.visited){
      root.right&&stack.push(root.right)
      root.left&&stack.push(root.left)
      root.visited = true
    }else {
      array.push(stack.pop().val)
    }
  }
  return array
};

let treeNode= new TreeNode(1)
treeNode.left = new TreeNode(2)
treeNode.left.left = new TreeNode(4)
treeNode.left.right = new TreeNode(5)
treeNode.right = new TreeNode(3)
treeNode.right.left = new TreeNode(6)
treeNode.right.right = new TreeNode(7)

console.log(postorderTraversa2(treeNode))
