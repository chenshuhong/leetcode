Given a sorted array *nums*, remove the duplicates [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm) such that each element appear only *once* and return the new length.

Do not allocate extra space for another array, you must do this by **modifying the input array in-place** with O(1) extra memory.

**Example 1:**

```
Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
```

**Example 2:**

```
Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
```

**Clarification:**

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by **reference**, which means modification to the input array will be known to the caller as well.

Internally you can think of this:

```
// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

> 给定一个已排序的数组nums，删除重复的地方并返回新的长度。
>
> 不要创建另一个数组来实现，级空间复杂度O(1)

由于是已经排好序的，所以利用一个游标来实现，该游标只在前后不一样时才移动

```js
var removeDuplicates = function(nums) {
  if (nums.length === 0){
    return 0
  }
  let currentIndex = 1
  for (let i=1,length = nums.length;i<length;i++){
    if (nums[i] !== nums[i-1]){
      nums[currentIndex] = nums[i]
      currentIndex++
    }
  }
  return currentIndex
};
```

