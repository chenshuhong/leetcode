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
