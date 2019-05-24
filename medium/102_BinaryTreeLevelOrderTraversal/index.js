let Queue = require('../../datastruct/Queue')
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let array = []
  let queue = new Queue()
  if (root){
    queue.push(root)
    root.level = 0
  }
  while (root){
    if (root.left){
      root.left.level = root.level+1
      queue.push(root.left)
    }
    if (root.right){
      root.right.level = root.level+1
      queue.push(root.right)
    }
    if(array[root.level]){
      array[root.level].push(root.val)
    }else {
      array[root.level] = [root.val]
    }
    queue.pop()
    root = queue.head()
  }
  return array
};

let treeNode= new TreeNode(1)
treeNode.left = new TreeNode(2)
//treeNode.left.left = new TreeNode(4)
//treeNode.left.right = new TreeNode(5)
treeNode.right = new TreeNode(3)
treeNode.right.left = new TreeNode(6)
treeNode.right.right = new TreeNode(7)

console.log(levelOrder(treeNode))
