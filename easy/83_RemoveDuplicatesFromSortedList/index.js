
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
var deleteDuplicates = function(head) {
  let curNode = head
  while(curNode&&curNode.next){
    debugger
    if (curNode.val === curNode.next.val){
      curNode.next = curNode.next.next
    } else {
      curNode = curNode.next
    }
  }
  return head
};

let l1 = new ListNode(1)
l1.next = new ListNode(1)
l1.next.next = new ListNode(2)

deleteDuplicates(l1)
console.log(l1.val,l1.next.val)
