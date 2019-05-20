let Stack = require('../../datastruct/Stack')
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = new Stack()
  this.min = Number.MAX_VALUE
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (x<=this.min){
    //每次入栈时，如果值比当前最小值小，要先入当前最小值，然后更新当前最小值，相当于记录此次入栈前的最小值
    this.stack.push(this.min)
    this.min = x
  }
  this.stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.stack.pop() === this.min){
    //如果栈顶元素是最小值，参考push操作，取出当前栈顶后的栈顶记录是之前入栈时的最小值
    this.min = this.stack.pop()
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack.top()
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

debugger
var obj = new MinStack()
obj.push(0)
obj.push(1)
obj.push(0)
obj.pop()
console.log(obj.getMin())
