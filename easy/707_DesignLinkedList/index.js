let ListNode = require('../../datastruct/ListNode')
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  //哨兵
  this.headNode = new ListNode(null)
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  let listNode = this.headNode
  while (listNode&&!index){
    listNode = listNode.next
    index--
  }
  return index?-1:listNode.value
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  let insertNode = new ListNode(val)
  if (this.headNode){
    insertNode.next = this.headNode
  }
  this.headNode = insertNode
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let insertNode = new ListNode(val)
  let listNode = this.headNode
  if (!listNode){
    this.headNode = insertNode
    return
  }
  while (listNode.next){
    listNode = listNode.next
  }
  listNode.next = insertNode
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
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {

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
