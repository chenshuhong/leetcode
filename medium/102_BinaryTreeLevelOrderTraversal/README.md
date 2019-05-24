Given a binary tree, return the *level order* traversal of its nodes' values. (ie, from left to right, level by level).

> 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

For example:
Given binary tree `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```



return its level order traversal as:

```
[
  [3],
  [9,20],
  [15,7]
]
```

利用一个队列来实现，注意记录下当前节点的层次

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let array = []
  let queue = new Queue()
  if (root){
    queue.push(root)
    root.level = 0
  }
  while (root){
    if (root.left){
      root.left.level = root.level+1
      queue.push(root.left)
    }
    if (root.right){
      root.right.level = root.level+1
      queue.push(root.right)
    }
    if(array[root.level]){
      array[root.level].push(root.val)
    }else {
      array[root.level] = [root.val]
    }
    queue.pop()
    root = queue.head()
  }
  return array
};
```

