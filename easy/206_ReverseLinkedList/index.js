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
  let oldHead = head
  let newHead = head
  while (oldHead.next){
    let tmpNode = oldHead.next
    oldHead.next = oldHead.next.next
    tmpNode.next = newHead
    newHead = tmpNode
  }
  return newHead
};

let l = new ListNode(1)
l.next = new ListNode(2)
l.next.next = new ListNode(3)
l.next.next.next = new ListNode(4)
l.next.next.next.next = new ListNode(5)

let l2 = reverseList(l)
console.log(JSON.stringify(l2))



