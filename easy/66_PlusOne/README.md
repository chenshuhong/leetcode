Given a **non-empty** array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

**Example 1:**

```
Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
```

**Example 2:**

```
Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
```

要注意下进位还有即可

```js
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let resultDigits = []
  digits.reduceRight((pre,cur,index,array)=>{
    debugger
    let result = (cur+pre)%10
    resultDigits.unshift(result)
    return pre+cur>=10?1:0
  },1)
  if (resultDigits[0] === 0){
    resultDigits.unshift(1)
  }
  return resultDigits
};
```

