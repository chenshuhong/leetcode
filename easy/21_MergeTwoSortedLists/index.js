let ListNode =require('../../datastruct/listNode')
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
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

let l1 = new ListNode(1)
l1.next = new ListNode(3)
l1.next.next = new ListNode(5)

let l2 = new ListNode(2)
l2.next = new ListNode(4)
l2.next.next = new ListNode(6)

console.log(mergeTwoLists(l1,l2))
