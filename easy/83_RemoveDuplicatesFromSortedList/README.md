Given a sorted linked list, delete all duplicates such that each element appear only *once*.

**Example 1:**

```
Input: 1->1->2
Output: 1->2
```

**Example 2:**

```
Input: 1->1->2->3->3
Output: 1->2->3
```

主要考察链表中节点删除

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
var deleteDuplicates = function(head) {
let curNode = head
  while(curNode&&curNode.next){
    if (curNode.val === curNode.next.val){
      curNode.next = curNode.next.next
    } else {
      curNode = curNode.next
    }
  }
  return head
};
```

