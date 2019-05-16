/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let sums = nums.reduce((pre,cur)=>{
    return pre+cur
  },0)
  let computerdNums = []
  for (let i=0,length = nums.length;i<length;i++){
    let computerdNum
    if (i===0){
      computerdNum=0
    } else {
      computerdNum =  computerdNums[i-1]+nums[i-1]
    }
    if (sums - computerdNum - nums[i] === computerdNum){
      return i
    }
    computerdNums.push(computerdNum)
  }
  console.log(computerdNums)
  return -1
};

console.log(pivotIndex([1,7,3,6,5,6]))
