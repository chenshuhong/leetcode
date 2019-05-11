/**
 * @param {number[]} nums
 * @return {number}
 */
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

let nums = [1,2,3,3,3,4,4,5]
console.log(removeDuplicates(nums))
console.log(nums)
