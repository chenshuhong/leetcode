let Queue = require('../../datastruct/Queue')
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
    root.level = 1
  }
  while (!queue.isEmpty()){
    if (root.left){
      root.left = root.level+1
      queue.push(root.left)
    }
    if (root.right){
      root.right = root.level+1
      queue.push(root.right)
    }
    array.push(root.val)
    queue.pop()
    root = queue.head()
  }
  return array
};
