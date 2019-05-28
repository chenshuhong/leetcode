Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

1. Search for a node to remove.
2. If the node is found, delete the node.

> 给定一个二叉搜索树的根节点 **root** 和一个值 **key**，删除二叉搜索树中的 **key** 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。
>
> 一般来说，删除节点可分为两个步骤：
>
> 1. 首先找到需要删除的节点；
> 2. 如果找到了，删除它。

**Note:** Time complexity should be O(height of tree).

**Example:**

```
root = [5,3,6,2,4,null,7]
key = 3

    5
   / \
  3   6
 / \   \
2   4   7

Given key to delete is 3. So we find the node with value 3 and delete it.

One valid answer is [5,4,6,2,null,null,7], shown in the following BST.

    5
   / \
  4   6
 /     \
2       7

Another valid answer is [5,2,6,null,4,null,7].

    5
   / \
  2   6
   \   \
    4   7
```

三种特殊情况：

1. 要删除的节点没左右子树
2. 要删除的节点只有左子树或右子树
3. 要删除的节点既有左子树又有右子树，此时需要用右子树的最小值替换要删除的节点值，然后删除右子树做小值节点

```js
var findMinNode = function (root) {
  while (root.left) {
    root = root.left
  }
  return root
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
 if(root == null){
    return null;
  }if(key < root.val){
    root.left = deleteNode(root.left, key);
  }else if(key > root.val){
    root.right = deleteNode(root.right, key);
  }else{
    if(root.left == null){
      return root.right;
    }else if(root.right == null){
      return root.left;
    }
    let minNode = findMinNode(root.right);
    root.val = minNode.val;
    root.right = deleteNode(root.right, root.val);
  }
    return root
};
```

