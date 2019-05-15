Implement `int sqrt(int x)`.

Compute and return the square root of *x*, where *x* is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

**Example 1:**

```
Input: 4
Output: 2
```

**Example 2:**

```
Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since 
             the decimal part is truncated, 2 is returned.
```

求开方，最简单的就是从头计算，当超过时，就大于x时说明结果就是当前的遍历值上一个整数

```js
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x==0||x==1){
    return x
  }
  for (let i=2;i<=x;i++){
    if (i*i>x) {
      return i-1
    }
  }
};
```

不过这里好多无效的遍历。

利用二分查找

```js
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x==0||x==1){
    return x
  }
  let left = 0,right = x,mid = parseInt((left+right)/2)
  while (left!==mid){
    let multi = mid *mid
    if (multi>x){
      right = mid
      mid = parseInt((left+right)/2)
    } else if (multi<x) {
      left = mid
      mid = parseInt((left+right)/2)
    } else {
      return mid
    }
  }
  return left   
};
```



其实对于任何大于等于1的树，其开方必然在[1,x/2+1]之间，我们可以利用这个范围再加以二分查找

```js
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x==0||x==1){
    return x
  }
  let left = 0,right = parseInt(x/2)+1,mid = parseInt((left+right)/2)
  while (left!==mid){
    let multi = mid *mid
    if (multi>x){
      right = mid
      mid = parseInt((left+right)/2)
    } else if (multi<x) {
      left = mid
      mid = parseInt((left+right)/2)
    } else {
      return mid
    }
  }
  return left
};
```

