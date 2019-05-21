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

var detectCycle2 = function (head) {
  let fastNode = head
  let lowNode = head
  while (fastNode){
    if (!lowNode){
      return null
    }
    if (!fastNode.next){
      return null
    }
    lowNode = lowNode.next
    fastNode = fastNode.next.next
    if (lowNode === fastNode){
      return true
    }
  }
  return null
}
