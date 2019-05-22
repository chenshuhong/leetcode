Given a linked list, return the node where the cycle begins. If there is no cycle, return `null`.

To represent a cycle in the given linked list, we use an integer `pos` which represents the position (0-indexed) in the linked list where tail connects to. If `pos` is `-1`, then there is no cycle in the linked list.

**Note:** Do not modify the linked list.

>  给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 `null`。
>
> 为了表示给定链表中的环，我们使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 `pos` 是 `-1`，则在该链表中没有环。
>
> **说明：**不允许修改给定的链表。

**Example 1:**

```
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
```

![img](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png)

**Example 2:**

```
Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.
```

![img](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png)

**Example 3:**

```
Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.
```

![img](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png)

 

**Follow up**:
Can you solve it without using extra space?

不考虑空间复杂度，用哈希表来查找

```js

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let nodeSet = new Set()
  while (head){
    if(nodeSet.has(head)){
      return head
    }else {
      nodeSet.add(head)
    }
    head = head.next
  }
  return null    
};
```

当我们需要在O(1)的空间复杂度完成时，就要用双指针方式了，1个指针每次向后移动一个节点，为慢指针，一个指针每次向后移动两个节点，为快指针。

![](https://pic.leetcode-cn.com/57a34c77f7f5beb498f07e313618946dba8b74cd921db792a6b775046a16d2b8-%E5%9B%BE%E8%A7%A31.png)

假设快慢指针相遇在D，则快指针这时刚好套慢指针环的一圈，

快指针走的路程：AB+BCDEB+BD

慢指针走的路程：AB+BD

由于S(快指针)=2*S(慢指针)，S表示总路程

则 AB+BCDEB+BD = 2*(AB+BD)

=>AB+BD = BCDEB

上式表明此时慢指针走过的全部路径刚好一圈

又根据一圈的关系 ， 有一圈剩余部分

DB = BCDEB - BD,和上面的式子可得

AB = DB

在慢指针从相遇点D继续向前走DB个长度，一个新指针从A起始点用同样速度 开始走，两个指针将会在B点相遇，而B点也正是我们想要的相遇点

```js
var detectCycle2 = function (head) {
  let p = head, p2 = head;
  let hasCycle = false;
  while (p2&&p2.next&& p2.next.next) {
    p = p.next;
    p2 = p2.next.next;
    if (p === p2) {
      hasCycle = true;
      break;
    }
  }
  // 步骤二：若有环，找到入环开始的节点
  if (hasCycle) {
    let q = head;
    while (p !== q) {
      p = p.next;
      q = q.next;
    }
    return q;
  } else{
    return null;
  }
}
```

