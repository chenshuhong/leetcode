let inorderTraversa = require('../../medium/94_BinaryTreeInorderTraversal').inorderTraversal1
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  let order = inorderTraversa(root)
  for (let i=0,length = order.length;i<(length-1)&&length>1;i++){
    if (order[i]>=order[i+1]){
      return false
    }
  }
  return true
};
