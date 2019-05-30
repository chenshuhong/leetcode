Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

> 给定一个二叉树，判断它是否是高度平衡的二叉树。

> a binary tree in which the depth of the two subtrees of *every* node never differ by more than 1.
>
> 一个二叉树*每个节点* 的左右两个子树的高度差的绝对值不超过1。

**Example 1:**

Given the following tree `[3,9,20,null,null,15,7]`:

```
    3
   / \
  9  20
    /  \
   15   7
```

Return true.

**Example 2:**

Given the following tree `[1,2,2,3,3,null,null,4,4]`:

```
       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
```

Return false.



自顶向下，递归求得每个节点的左右子树高度，不过复杂度挺高，达到O（n^2）

```js
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

```

