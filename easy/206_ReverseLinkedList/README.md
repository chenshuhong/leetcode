Reverse a singly linked list.

**Example:**

```
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
```

**Follow up:**

A linked list can be reversed either iteratively or recursively. Could you implement both?

> 反转一个单链表。
>
> **进阶:**
> 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？



使用迭代方式,利用两个节点，最新头结点和初始头结点，不断把节点插到最前面，实现反转

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head||!head.next)
    return head
  let oldHead = head
  let newHead = head
  let tmpNode
  while (oldHead.next){
    tmpNode = oldHead.next
    oldHead.next = oldHead.next.next
    tmpNode.next = newHead
    newHead = tmpNode
  }
  return newHead
};
```



递归方式：

