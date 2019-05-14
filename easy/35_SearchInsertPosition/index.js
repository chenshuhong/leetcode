/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums.length === 0){
    return 0
  }
  let headIndex=0,tailIndex=nums.length-1,index
  while (headIndex<=tailIndex){
    index = parseInt((tailIndex+headIndex)/2)
    let value = nums[index]
    if (value === target){
      return index
    } else if (value>target) {
      tailIndex = index - 1
    } else {
      headIndex = index +1
    }
  }
  return nums[index]>target?index:index+1
};


console.log(searchInsert([1,3,5,6],7))
