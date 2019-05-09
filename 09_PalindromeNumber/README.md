Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

> 判断给定数字是否会文，即从左到右与从右到左一样

**Example 1:**

```
Input: 121
Output: true
```

**Example 2:**

```
Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

**Example 3:**

```
Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

**Follow up:**

Coud you solve it without converting the integer to a string?

> 不要转换成字符串能否解决

我们先用转换成字符串方案

```js
var isPalindrome = function(x) {
  if (x<0)
    return false
  let xArray = x.toString().split('')
  xArray.reverse()
  let palindromeX=+xArray.join('')
  return x === palindromeX
};
```

如果要不转换成字符串，我们模仿转换成字符串的方法，先把他每个数字利用求余输出保存到数组里，然后首尾比较即可

```js
var isPalindrome2 = function(x) {
  if (x<0)
    return false
  let remainders = []
  while(x!==0){
    remainders.push(x%10)
    x=parseInt(x/10)
  }
  for (let i=0,halfLength=remainders.length/2;i<halfLength;i++){
    if (remainders[i]!==remainders[remainders.length-1-i]){
      return false
    }
  }
  return true
};
```

不过这复杂度还是有点高，达到了O（n），下面是参考别人的方法的第三版

```js
var isPalindrome3 = function(x) {
  if (x<0)
    return false
  if (x%10===0&&x!==0){
    return false
  }
  let revertedNumber = 0
  while(x>revertedNumber){
    revertedNumber = revertedNumber*10+x%10
    x=parseInt(x/10)
  }
  return x===revertedNumber || x === parseInt(revertedNumber/10)
};
```

还是利用求余，不过我们只求一半，比如123321

第一次循环后，x为12332，revertedNumber为1

第二次循环后，x为1233，revertedNumber为12

第三次循环后，x为123，revertedNumber为123

此时发现不满足x>revertedNumber，就可以判断是否回文了

注意当数字个数为偶数时，会出现中间数，所以要除以10再判断