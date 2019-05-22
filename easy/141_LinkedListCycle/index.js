/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
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
  return hasCycle
};

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
