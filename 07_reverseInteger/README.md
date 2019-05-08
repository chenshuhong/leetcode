Given a 32-bit signed integer, reverse digits of an integer.

> 给定一个32位带符号整数，对其数字进行反数

**Example 1:**

```
Input: 123
Output: 321
```

**Example 2:**

```
Input: -123
Output: -321
```

**Example 3:**

```
Input: 120
Output: 21
```

**Note:**
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

> 假设我们处理的环境只能存储32位带符号整数范围内的整数:[-2^31,2^31-1]。对于这个问题，假定函数在反转整数溢出时返回0。

第一版：

```js
var reverse = function(x) {
  let isPositive = x>=0?1:-1
  let xArray = Math.abs(x).toString().split('')
  xArray.reverse()
  x = xArray.join('')*isPositive
  if (x>=-0x80000000&&x<=0x7fffffff){
    return x
  }
  return 0
};
```

首先获取是正数还是负数，返回正负1

把该数转换为绝对值后利用split分割然后反转在合并，利用上面返回的标志位给结果增加正负符号，

之后简单判断值是否溢出

不过该方案有个问题，就是假设当前环境真的只能存储32位带符号整数范围内的整数，那么任何超过该数的结果都会立即溢出，我们要在溢出之前知道他会溢出才是正确的，下面是第二版

```js
let maxValue = 0x7fffffff
let minValue = -0x80000000
let limitMaxValue = parseInt(0x7fffffff/10)
let limitMinValue = parseInt(-0x80000000/10)
var reverse2 = function(x) {
  let rev = 0
  let pop = 0
  while (x!==0){
    pop = x%10
    x = parseInt(x/10)
    if (rev>limitMaxValue||(rev===limitMaxValue&&pop>7))
      return 0
    if (rev<limitMinValue||(rev===limitMaxValue&&pop<-8))
      return 0
    rev = rev*10+pop
  }
  return rev
};
```

0x7fffffff表示2^31-1，即2147483647,-0x80000000表示-2^31，即-2147483648，对于一个数比如1234转换最终结果是4321，等同于4\*10^3+3\*10^2+2\*10^1+1\*10^0,等同于(((4)\*10+3)\*10+2)\*10+1，

另x=1234，rev=0

x除以10求商和余，得123，和4，把123赋给x，rev =rev*10+4 ，即4

x除以10求商和余，得12，和3，把12赋给x，rev =rev*10+3 ，即43

x除以10求商和余，得1，和2，把1赋给x，rev =rev*10+2 ，即432

x除以10求商和余，得0，和1，把0赋给x，rev =rev*10+1 ，即4321

x为0，结束循环

在rev*10之前，要判断其乘完之后时候会溢出