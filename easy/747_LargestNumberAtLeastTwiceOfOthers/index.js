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

console.log(dominantIndex([3,6]))

function swap(nums,swapIndex1,swapIndex2){
  let num = nums[swapIndex1]
  nums[swapIndex1] = nums[swapIndex2]
  nums[swapIndex2] = num
}
