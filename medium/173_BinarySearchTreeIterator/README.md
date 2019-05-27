Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

Calling `next()` will return the next smallest number in the BST.

>  实现一个二叉搜索树迭代器。你将使用二叉搜索树的根节点初始化迭代器。
>
> 调用 `next()` 将返回二叉搜索树中的下一个最小的数。



**Example:**

**![img](https://assets.leetcode.com/uploads/2018/12/25/bst-tree.png)**

```
BSTIterator iterator = new BSTIterator(root);
iterator.next();    // return 3
iterator.next();    // return 7
iterator.hasNext(); // return true
iterator.next();    // return 9
iterator.hasNext(); // return true
iterator.next();    // return 15
iterator.hasNext(); // return true
iterator.next();    // return 20
iterator.hasNext(); // return false
```

 

**Note:**

- `next()` and `hasNext()` should run in average O(1) time and uses O(*h*) memory, where *h* is the height of the tree.
- You may assume that `next()` call will always be valid, that is, there will be at least a next smallest number in the BST when `next()` is called.

先不考虑空间复杂度，我们中序遍历输出递增序列，通过游标来实现next

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
 */
var BSTIterator = function(root) {
  this.order = inorderTraversal(root)
  this.index = 0
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  return this.order[this.index++]
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.order.length>this.index
};
```

