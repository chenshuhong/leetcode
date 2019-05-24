Given a binary tree, return the *inorder* traversal of its nodes' values.

> 给定一个二叉树，返回它的*中序* 遍历。

**Example:**

```
Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
```

**Follow up:** Recursive solution is trivial, could you do it iteratively?



递归方式，很简单

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
var inorderTraversal = function(root,array=[]) {
  if (root){
    root.left&&inorderTraversal(root.left,array)
    array.push(root.val)
    root.right&&inorderTraversal(root.right,array)
  }
  return array
};
```



迭代方式要用到栈辅助实现

```js
var inorderTraversal2 = function(root) {
  let array =[]
  let stack = new Stack()
  root&&stack.push(root)
  while (!stack.isEmpty()){
    let treeNode = stack.top()
    if (treeNode.left&&!treeNode.leftVisited){
      treeNode.leftVisited = true
      stack.push(treeNode.left)
    }else {
      array.push(treeNode.val)
      stack.pop()
      if (treeNode.right&&!treeNode.rightVisited){
        treeNode.rightVisited = true
        stack.push(treeNode.right)
      }
    }
  }
  return array
};
```

