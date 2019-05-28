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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (root.val > val) {
    root.left?insertIntoBST(root.left,val):root.left = new TreeNode(val)
  } else {
    root.right?insertIntoBST(root.right,val):root.right = new TreeNode(val)
  }
  return root
};
