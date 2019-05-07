/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function(nums, target) {
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

var twoSum2 = function(nums, target){
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
}

module.exports = {
  sum1:twoSum1,
  sum2:twoSum2,
}
