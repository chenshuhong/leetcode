/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (nums.length === 0){
    return 0
  }
  let currentIndex = 0
  for (let i=0,length = nums.length;i<length;i++){
    if (nums[i] !== val){
      nums[currentIndex] = nums[i]
      currentIndex++
    }
  }
  return currentIndex
};

let nums = [1,2,3,3,3,4,4,5]
console.log(removeElement(nums,4))
console.log(nums)
