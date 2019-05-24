Given a binary tree, return the *postorder* traversal of its nodes' values.

> 给定一个二叉树，返回它的 *后序* 遍历。

**Example:**

```
Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [3,2,1]
```

**Follow up:** Recursive solution is trivial, could you do it iteratively?

递归很简单

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
var postorderTraversal = function(root,array=[]) {
  if (root){
    root.left&&postorderTraversal(root.left,array)
    root.right&&postorderTraversal(root.right,array)
    array.push(root.val)
  }
  return array
};
```





同样利用栈来模拟递归调用栈

```js
var postorderTraversa2 = function(root) {
  let array = []
  let stack = new Stack()
  root&&stack.push(root)
  while (!stack.isEmpty()){
    debugger
    root = stack.top()
    if ((root.right||root.left)&&!root.visited){
      root.right&&stack.push(root.right)
      root.left&&stack.push(root.left)
      root.visited = true
    }else {
      array.push(stack.pop().val)
    }
  }
  return array
};
```

