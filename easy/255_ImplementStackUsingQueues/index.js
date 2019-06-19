let Queue = require('../../datastruct/Queue')
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.queue = new Queue()
  this.helpQueue = new Queue()
  this.topItem = null
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queue.push(x)
  this.topItem = x
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  while (this.queue.length()>1){
    this.topItem = this.queue.pop()
    this.helpQueue.push(this.topItem)
  }
  let popItem = this.queue.pop()
  let temp = this.helpQueue
  this.helpQueue = this.queue
  this.queue = temp
  return popItem
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.topItem
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.queue.isEmpty()
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
