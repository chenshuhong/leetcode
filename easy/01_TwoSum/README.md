Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

You may assume that each input would have **exactly** one solution, and you may not use the *same* element twice.

> 给定一个整数数组，返回两个数字的索引，使它们加起来等于一个特定的目标。
>
> 您可以假设每个输入都只有一个解决方案，并且不能两次使用相同的元素。

**Example:**

```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

第一版：

```js
var twoSum = function(nums, target) {
  if (!Array.isArray(nums))
        return []
    for (let i=0,length = nums.length;i<length-1;i++){
        for (let j=i+1,length=nums.length;j<length;j++){
            if (nums[i]+nums[j]===target){
                return [i,j]
            } 
        } 
    }
    return []
};
```

循环遍历每个元素，看看是否有另一个值与之相加等于target。时间复杂度O（n^2）,时间复杂度O(1)



第二版：

```js
var twoSum = function(nums, target) {
  let map = new Map()
  for(let i=0,length = nums.length;i<length;i++){
    map.set(nums[i],i)
  }
  for (let i=0,length=nums.length;i<length;i++){
    let key = target-nums[i]
    if (map.has(key)){
      let index = map.get(key)
      if (i!==index){
        return [i,map.get(key)]
      }
    }
  }
  return []
};
```

利用一个map来存储nums，值为key，下标为值，但我们找到另一个数的值时，看该值能否在map中有存储，如果有，以该值为键则可以拿到下标。

时间复杂度我O(n),由于利用map，所以空间复杂度为O（n）

