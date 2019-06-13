Given a list of daily temperatures `T`, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put `0` instead.

For example, given the list of temperatures `T = [73, 74, 75, 71, 69, 72, 76, 73]`, your output should be `[1, 1, 4, 2, 1, 1, 0, 0]`.

> 根据每日 `气温` 列表，请重新生成一个列表，对应位置的输入是你需要再等待多久温度才会升高的天数。如果之后都不会升高，请输入 `0` 来代替。
>
> 例如，给定一个列表 `temperatures = [73, 74, 75, 71, 69, 72, 76, 73]`，你的输出应该是 `[1, 1, 4, 2, 1, 1, 0, 0]`。
>
> **提示：**`气温` 列表长度的范围是 `[1, 30000]`。每个气温的值的都是 `[30, 100]` 范围内的整数。

**Note:** The length of `temperatures` will be in the range `[1, 30000]`. Each temperature will be an integer in the range `[30, 100]`.

第一版，采用暴力穷举法,复杂度太高，达到了O（n^2）

```js
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
let resultArray = []
  for (let i=0,length = T.length;i<length;i++){
    for (let j=i;j<length;j++){
      if (T[i]<T[j]){
        resultArray[i] = j-i
        break
      }else if (j===length-1){
        resultArray[i] = 0
      } 
    }
  }
  return resultArray    
};
```

维护一个递减栈来实现

遍历数组，当数组元素小于栈顶时，入栈并记住下标，不然就不断出栈，下标差为我们想要的最小天数

```js
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
if (!T[0]){
    return []
  }
  let resultArray = []
  let stack = new Stack()
  stack.push([0,T[0]])
  for (let i=1,length = T.length;i<length;i++){
    while (!stack.isEmpty()&&T[i]>stack.top()[1]) {
      let index = stack.pop()[0]
      resultArray[index] = i-index
    }
    stack.push([i,T[i]])
  }
  while (!stack.isEmpty()) {
    let index = stack.pop()[0]
    resultArray[index] = 0
  }
  return resultArray
};
```

