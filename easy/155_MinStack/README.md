Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

- push(x) -- Push element x onto stack.
- pop() -- Removes the element on top of the stack.
- top() -- Get the top element.
- getMin() -- Retrieve the minimum element in the stack.



**Example:**

```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
```

利用一个栈实现最小栈，主要是用栈来记录入栈时候的最小值，出栈的时候当检测到栈顶是最小值时，要利用之前记录的值来更新最小值

```js
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
```

