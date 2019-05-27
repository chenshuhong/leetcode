Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

- The left subtree of a node contains only nodes with keys **less than** the node's key.
- The right subtree of a node contains only nodes with keys **greater than** the node's key.
- Both the left and right subtrees must also be binary search trees.

>  给定一个二叉树，判断其是否是一个有效的二叉搜索树。
>
> 假设一个二叉搜索树具有如下特征：
>
> - 节点的左子树只包含**小于**当前节点的数。
> - 节点的右子树只包含**大于**当前节点的数。
> - 所有左子树和右子树自身必须也是二叉搜索树。

**Example 1:**

```
    2
   / \
  1   3

Input: [2,1,3]
Output: true
```

**Example 2:**

```
    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
```

先中序遍历，然后看输出的数据是否递增排序

```js
var inorderTraversal = function(root,array=[]) {
  if (root){
    root.left&&inorderTraversal(root.left,array)
    array.push(root.val)
    root.right&&inorderTraversal(root.right,array)
  }
  return array
};

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
  let order = inorderTraversal(root)
  for (let i=0,length = order.length;i<(length-1)&&length>1;i++){
    if (order[i]>=order[i+1]){
      return false
    } 
  }  
  return true  
};
```

