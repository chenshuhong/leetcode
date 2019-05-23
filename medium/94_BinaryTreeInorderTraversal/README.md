Given a binary tree, return the *preorder* traversal of its nodes' values.

> 给定一个二叉树，返回它的 *前序* 遍历。

**Example:**

```
Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]
```

**Follow up:** Recursive solution is trivial, could you do it iteratively?

采用递归方式

```js
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
var preorderTraversal = function(root,array=[]) {
  if (root){
    array.push(root.val)
    root.left&&preorderTraversal(root.left,array)
    root.right&&preorderTraversal(root.right,array)
  }
  return array
};
```

采用迭代方式，利用一个栈来记录右侧节点

```js
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
var preorderTraversal = function(root) {
let array = [],stack = new Stack()
  while (root){
    array.push(root.val)
    root.right&&stack.push(root.right)
    root = root.left
    if (!root&&!stack.isEmpty()){
      root = stack.pop()
    } 
  } 
    return array
};
```

