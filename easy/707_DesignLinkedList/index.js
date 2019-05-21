let ListNode = require('../../datastruct/ListNode')
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  //哨兵
  this.headNode = new ListNode(-1)
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  index=index+1
  let listNode = this.headNode
  while (listNode.next&&index){
    listNode = listNode.next
    index--
  }
  return index?-1:listNode.val
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  this.addAtIndex(0,val)
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
 this.addAtIndex(-1,val)
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  let insertNode = new ListNode(val)
  let listNode = this.headNode
  while (listNode.next&&index){
    listNode = listNode.next
    index--
  }
  if (!index){
    insertNode.next = listNode.next
    listNode.next = insertNode
  }else if (index<0) {
    listNode.next = insertNode
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  let listNode = this.headNode
  while (listNode.next&&index){
    listNode = listNode.next
    index--
  }
  if (!index){
    listNode.next = listNode.next?listNode.next.next:null
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

let l = new MyLinkedList()
l.addAtHead(1)
l.addAtTail(3)
l.addAtIndex(1,2)
console.log(JSON.stringify(l))
