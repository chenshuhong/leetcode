function depth(root){
  if (!root)
    return 0;
  return Math.max(depth(root.left), depth (root.right)) + 1;
}
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
var isBalanced = function(root) {
  if (!root)
    return true;
  let leftDepth=depth(root.left);
  let rightDepth=depth(root.right);
  return Math.abs(leftDepth - rightDepth) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};
