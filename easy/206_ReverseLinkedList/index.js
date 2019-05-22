let ListNode = require('../../datastruct/ListNode')
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
  let listNode = head
  let newHead = head
  while (listNode.next){
    newHead = listNode.next
    listNode.next = listNode.next.next
    newHead.next = listNode
  }
  console.log(newHead)
  return newHead
};

let l = new ListNode(1)
l.next = new ListNode(2)
l.next.next = new ListNode(3)
l.next.next.next = new ListNode(4)
l.next.next.next.next = new ListNode(5)

console.log(reverseList(l))



