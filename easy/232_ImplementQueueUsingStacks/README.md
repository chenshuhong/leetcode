Implement the following operations of a queue using stacks.

- push(x) -- Push element x to the back of queue.
- pop() -- Removes the element from in front of queue.
- peek() -- Get the front element.
- empty() -- Return whether the queue is empty.

> 使用栈实现队列的下列操作：
>
> - push(x) -- 将一个元素放入队列的尾部。
> - pop() -- 从队列首部移除元素。
> - peek() -- 返回队列首部的元素。
> - empty() -- 返回队列是否为空。

**Example:**

```
MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);  
queue.peek();  // returns 1
queue.pop();   // returns 1
queue.empty(); // returns false
```

**Notes:**

- You must use *only* standard operations of a stack -- which means only `push to top`, `peek/pop from top`, `size`, and `is empty` operations are valid.
- Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
- You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).

利用两个栈，当入队时，把当前栈元素出栈，然后把元素入栈，再把之前出栈的元素入栈。

```js
let Stack = require('../../datastruct/Stack')
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.stack = new Stack()
  this.helpStack = new Stack()
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  while (!this.stack.isEmpty()){
    this.helpStack.push(this.stack.pop())
  }
  this.stack.push(x)
  while (!this.helpStack.isEmpty()){
    this.stack.push(this.helpStack.pop())
  }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  return this.stack.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.stack.top()
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stack.isEmpty()
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

```

