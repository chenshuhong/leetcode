Evaluate the value of an arithmetic expression in [Reverse Polish Notation](http://en.wikipedia.org/wiki/Reverse_Polish_notation).

Valid operators are `+`, `-`, `*`, `/`. Each operand may be an integer or another expression.

> 根据[逆波兰表示法](https://baike.baidu.com/item/%E9%80%86%E6%B3%A2%E5%85%B0%E5%BC%8F/128437)，求表达式的值。
>
> 有效的运算符包括 `+`, `-`, `*`, `/` 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

**Note:**

- Division between two integers should truncate toward zero.
- The given RPN expression is always valid. That means the expression would always evaluate to a result and there won't be any divide by zero operation.

**Example 1:**

```
Input: ["2", "1", "+", "3", "*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
```

**Example 2:**

```
Input: ["4", "13", "5", "/", "+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
```

**Example 3:**

```
Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
Output: 22
Explanation: 
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
```

利用栈存储计算结果

```js
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let operators = ['+','-','*','/']
  let stack = new Stack()
  let result = 0
  for (let i=0,length = tokens.length;i<length;i++){
    let operator = tokens[i]
    if (operators.indexOf(operator)==-1){
      stack.push(operator)
    }else {
      let num1 = stack.pop()
      let num2 = stack.pop()
      result = operate(operator,num2,num1)
      stack.push(result)
    }
  }
  return stack.top()
};

function operate(operator,num1,num2){
  num1 = num1-0
  num2 = num2-0
  switch (operator) {
    case '+':
      return num1+num2
    case '-':
      return num1-num2
    case '*':
      return num1*num2
    case '/':
      return parseInt(num1/num2)
    default:
      return NaN
  }
}
```

