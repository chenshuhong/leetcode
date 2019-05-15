/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let resultDigits = []
  digits.reduceRight((pre,cur,index,array)=>{
    debugger
    let result = (cur+pre)%10
    resultDigits.unshift(result)
    return pre+cur>=10?1:0
  },1)
  if (resultDigits[0] === 0){
    resultDigits.unshift(1)
  }
  return resultDigits
};

console.log(plusOne([9,9,9]))

