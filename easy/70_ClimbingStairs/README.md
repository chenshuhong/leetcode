You are climbing a stair case. It takes *n* steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

**Note:** Given *n* will be a positive integer.

**Example 1:**

```
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```

**Example 2:**

```
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

这道题要用递归来解决，爬楼梯时可以一下爬两步，或者一下爬一步，所以我们可以把爬n步（n>=1）看成先爬一步后继续爬的步数加上先爬两步后继续爬需要的步数，即f(n) = f(n-1)+f(n-2)，递归要有终止条件，这里当剩下2步时还有2种爬法，当剩下1步时还有1种爬法。第一版：

```js
var climbStairs = function(n) {
  if(n===1){
    return 1
  }
  if (n === 2){
    return 2
  }
  let result = climbStairs(n-1)+ climbStairs(n-2)
  return result
};
```

这里会经常重复计算，当n越大时，执行越慢，比如f(7) = f(6)+f(5),而f(6)=f(5)+f(4)，这里就重复计算了两次f(5),所以第二版：

```js
var climbStairs = function(n) {
  if(n===1){
    return 1
  }
  if (n === 2){
    return 2
  }
  if (hasSolvedList.has(n)) {
    return hasSolvedList.get(n)
  }
  let result = climbStairs(n-1)+ climbStairs(n-2)
  hasSolvedList.set(n,result)
  return result
};
```

