In a given integer array `nums`, there is always exactly one largest element.

Find whether the largest element in the array is at least twice as much as every other number in the array.

If it is, return the **index** of the largest element, otherwise return -1.

> 在一个给定的数组`nums`中，总是存在一个最大元素 。
>
> 查找数组中的最大元素是否至少是数组中每个其他数字的两倍。
>
> 如果是，则返回最大元素的索引，否则返回-1。

**Example 1:**

```
Input: nums = [3, 6, 1, 0]
Output: 1
Explanation: 6 is the largest integer, and for every other number in the array x,
6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
```

**Example 2:**

```
Input: nums = [1, 2, 3, 4]
Output: -1
Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.
```

 

**Note:**

1. `nums` will have a length in the range `[1, 50]`.
2. Every `nums[i]` will be an integer in the range `[0, 99]`.

我们可以分两次找，第一次找到最大的数字，然后移动到开头，接口从第二个开始找，找到最大的，然后比较第一个和第二个就可以得出结果

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let numLength = nums.length
  if (numLength === 1) {
    return 0
  }
  let maxIndex = 0
  for (let i=1;i<numLength;i++){
    if (nums[0]<nums[i]) {
      maxIndex = i
      swap(nums,0,i)
    }
  }
  for (let i=2;i<numLength;i++){
    if (nums[1]<nums[i]){
      swap(nums,1,i)
    }
  }
  return nums[1]*2<=nums[0]?maxIndex:-1
};
```

