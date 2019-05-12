let ListNode = require('../../datastruct/ListNode')
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
var addTwoNumbers = function(l1, l2) {
  let resultNode,isOverTen = 0,value,tempNode,lastNode
  while(l1||l2) {
    debugger
    value = (l1?l1.val:0)+(l2?l2.val:0)+isOverTen
    if (value>=10){
      value = value%10
      isOverTen = 1
    } else {
      isOverTen = 0
    }
    tempNode = new ListNode(value)
    if (resultNode){
      lastNode.next = tempNode
    } else {
      resultNode = tempNode
    }
    lastNode = tempNode
    if (l1){
      l1 = l1.next
    }
    if (l2){
      l2 = l2.next
    }
  }
  if (isOverTen){
    lastNode.next = new ListNode(1)
  }
  return resultNode
};

let l1 = new ListNode(5)
l1.next = new ListNode(4)
l1.next.next = new ListNode(6)

let l2 = new ListNode(3)
l2.next = new ListNode(6)
l2.next.next = new ListNode(7)

let testResult = addTwoNumbers(l1,l2)
while (testResult){
  console.log(testResult.val)
  testResult = testResult.next
}
