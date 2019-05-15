/**
 * @param {number} n
 * @return {number}
 */
let hasSolvedList = new Map()
var climbStairs = function(n) {
  if(n===1){
    return 1
  }
  if (n === 2){
    return 2
  }
  if (hasSolvedList.has(n)) {
    return hasSolvedList.get(n)
  }
  let result = climbStairs(n-1)+ climbStairs(n-2)
  hasSolvedList.set(n,result)
  return result
};

console.log(climbStairs(45))
