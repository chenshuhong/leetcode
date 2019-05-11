Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

> 合并两个已经排好序的链表，返回一个新的链表

**Example:**

```
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```

这道题主要是listnode的引用要注意下，还有插入新的节点后最右边节点的更新

```js
var mergeTwoLists = function(l1, l2) {
  //判断是否都为空
  if (!l1&&!l2){
    return null
  }
  //resultNode是最终链表的头结点，tempNode是即将插入链表节点，lastNode是链表最右边节点
  let resultNode,tempNode,lastNode,l
  while (l1||l2) {
    if (l1&&l2){
      l = l1.val>l2.val?l2:l1
    } else{
      l = l1 ? l1 : l2
    }
    tempNode = new ListNode(l.val)
    if (resultNode){
      lastNode.next = tempNode
    } else {
      resultNode = tempNode
    }
    lastNode = tempNode
    if(l1&&l.val === l1.val){
      l1 = l1.next
    }else {
      l2 = l2.next
    }
  }
  return resultNode
};
```

