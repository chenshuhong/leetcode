Given two sorted integer arrays *nums1* and *nums2*, merge *nums2* into *nums1* as one sorted array.

> 给定两个有序整数数组 *nums1* 和 *nums2*，将 *nums2* 合并到 *nums1* 中*，*使得 *num1* 成为一个有序数组。

**Note:**

- The number of elements initialized in *nums1* and *nums2* are *m* and *n* respectively.
- You may assume that *nums1* has enough space (size that is greater or equal to *m* + *n*) to hold additional elements from *nums2*.

**Example:**

```
Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
```

利用index记录当前移动位置

```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let mIndex = 0,nIndex = 0
  while ((mIndex < (m+nIndex))&&nIndex < n){
    if (nums1[mIndex]<=nums2[nIndex]){
      mIndex++
    } else {
      nums1.splice(mIndex,0,nums2[nIndex])
      nIndex++
      mIndex++
    }
  }
  if (mIndex === (m+nIndex)){
    for (let i = mIndex;i<m+n;i++){
      nums1[i] = nums2[i-m]
    }
  }
  nums1.splice(m+n,nums1.length)
  console.log(nums1)
};
```

