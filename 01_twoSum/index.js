/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
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
