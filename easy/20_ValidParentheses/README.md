Given a string containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

> 给定一个包含(){}[]的字符串，判断字符串是否有效
>
> 判断规则如下：
>
> - 括号必须有开有关
> - 相同的开括号必须以正确的顺序关闭

**Example 1:**

```
Input: "()"
Output: true
```

**Example 2:**

```
Input: "()[]{}"
Output: true
```

**Example 3:**

```
Input: "(]"
Output: false
```

**Example 4:**

```
Input: "([)]"
Output: false
```

**Example 5:**

```
Input: "{[]}"
Output: true
```

利用栈的先进后出，实现

```js
class Stack{
  constructor(){
    this.array = []
  }
  
  //入栈
  push(item){
    this.array.push(item)
  }
  
  //出栈
  pop(){
    return this.array.pop()
  }
  
  isEmpty(){
    return this.array.length === 0
  }
  
  length(){
    return this.array.length
  }
  
  top(){
    if (this.isEmpty()){
      return null
    }
    return this.array[this.array.length-1]
  }
}

let map = {
  '(':')',
  '{':'}',
  '[':']'
}

var isValid = function(s) {
  let stack = new Stack()
  for(let i=0,length = s.length;i<length;i++){
    let char = s[i]
    if (Object.keys(map).indexOf(char)!==-1){
      stack.push(char)
    } else if (Object.values(map).indexOf(char)!==-1){
      let stackTop = stack.top()
      if (map[stackTop]===char){
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.isEmpty()
};
```

