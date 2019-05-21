Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer `pos` which represents the position (0-indexed) in the linked list where tail connects to. If `pos` is `-1`, then there is no cycle in the linked list.

> 给定一个链表，判断链表中是否有环。
>
> 为了表示给定链表中的环，我们使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 `pos` 是 `-1`，则在该链表中没有环

 

**Example 1:**

```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.
```

![img](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png)

**Example 2:**

```
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the first node.
```

![img](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png)

**Example 3:**

```
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
```

![img](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png)

 

**Follow up:**

Can you solve it using *O(1)* (i.e. constant) memory?



我们利用es6的set来判断

```js
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle2 = function(head) {
  let nodeSet = new Set()
  while (head){
    if(nodeSet.has(head)){
      return true
    }else {
      nodeSet.add(head)
    }
    head = head.next
  }
  return false
};
```

不过该方法空间复杂段过高，O(n),我们可以利用快慢指针判断环

```js
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let fastNode = head
  let lowNode = head
  while (fastNode){
    if (!lowNode){
      return false
    }
    if (!fastNode.next){
      return false
    }
    lowNode = lowNode.next
    fastNode = fastNode.next.next
    if (lowNode === fastNode){
      return true
    }
  }
  return false
};
```

