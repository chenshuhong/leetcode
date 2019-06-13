/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  while (p&&q){
    if (p.val === q.val){
      return isSameTree(p.left,q.left)&&isSameTree(p.right,q.right)
    }
    return false
  }
  return !p&&!q
};
