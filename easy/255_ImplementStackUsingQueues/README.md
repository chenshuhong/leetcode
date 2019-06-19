Implement the following operations of a stack using queues.

- push(x) -- Push element x onto stack.
- pop() -- Removes the element on top of the stack.
- top() -- Get the top element.
- empty() -- Return whether the stack is empty.

> 使用队列实现栈的下列操作：
>
> - push(x) -- 元素 x 入栈
> - pop() -- 移除栈顶元素
> - top() -- 获取栈顶元素
> - empty() -- 返回栈是否为空

**Example:**

```
MyStack stack = new MyStack();

stack.push(1);
stack.push(2);  
stack.top();   // returns 2
stack.pop();   // returns 2
stack.empty(); // returns false
```

**Notes:**

- You must use *only* standard operations of a queue -- which means only `push to back`, `peek/pop from front`, `size`, and `is empty` operations are valid.
- Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
- You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).

利用两个队列，当入栈时，直接调用队列的插入，不过要记住当前插入的元素，其为栈顶元素

当出栈时，把当前队列除了对尾元素外，全部出队到另一个队列，最后一个出队的即为新的栈顶元素，对尾元素单独出队不入队，及模拟了出栈，还要把两个队列交换下。

```js
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

```

