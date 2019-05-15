Given two binary strings, return their sum (also a binary string).

The input strings are both **non-empty** and contains only characters `1` or `0`.

**Example 1:**

```
Input: a = "11", b = "1"
Output: "100"
```

**Example 2:**

```
Input: a = "1010", b = "1011"
Output: "10101"
```

> 实现两个二进制相加

以长的字符串为主，反转后从第一位开始相加，注意记住最后一次相加，以便补1

```
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let longArray,shortArray,resultArray=[]
  if (a.length>b.length){
    longArray = a.split('').reverse()
    shortArray = b.split('').reverse()
  } else {
    longArray = b.split('').reverse()
    shortArray = a.split('').reverse()
  }
  let needPush = longArray.reduce((pre,cur,index,array)=>{
    let result = +cur+pre+(+shortArray[index]||0)
    resultArray.push(result%2)
    return result>=2?1:0
  },0)
  if (needPush){
    resultArray.push(1)
  }
  return resultArray.reverse().join('')
};
```

