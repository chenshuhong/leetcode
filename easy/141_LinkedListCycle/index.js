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
