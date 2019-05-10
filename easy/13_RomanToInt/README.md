Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

> 写一个从字符数组中求最长公共前缀的方法
>
> 如果没找到的话，返回“”

**Example 1:**

```
Input: ["flower","flow","flight"]
Output: "fl"
```

**Example 2:**

```
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

**Note:**

All given inputs are in lowercase letters `a-z`.

> 所有的字符都是a-z的小写字符

对于这道问题，第一眼的解决方法就是暴力遍历，先试试吧

```js
var longestCommonPrefix = function(strs) {
  if (!strs.length){
    return ''
  } 
  let minLength=Number.MAX_SAFE_INTEGER
  //求得字符串数组中最小长度
  strs.map(str=>{
    if (minLength>str.length){
      minLength=str.length
    }
  })
  
  for (let i=0;i<minLength;i++){
    for (let j=1,length=strs.length;j<length;j++){
      if (strs[0][i]!==strs[j][i]){
        return i===0?'':strs[0].substr(0,i);
      }
    }
  }
  return strs[0].substr(0,minLength)
};
```

先求得最短字符串的个数，因为公共前缀肯定不会超过这个长度，然后，以第一个字符串的字母逐个其它同位置比较，发现有不一样则结束循环，返回字符串

