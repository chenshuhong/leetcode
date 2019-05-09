/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome1 = function(x) {
  if (x<0)
    return false
  let xArray = x.toString().split('')
  xArray.reverse()
  let palindromeX=+xArray.join('')
  return x === palindromeX
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome2 = function(x) {
  if (x<0)
    return false
  let remainders = []
  while(x!==0){
    remainders.push(x%10)
    x=parseInt(x/10)
  }
  for (let i=0,halfLength=remainders.length/2;i<halfLength;i++){
    if (remainders[i]!==remainders[remainders.length-1-i]){
      return false
    }
  }
  return true
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome3 = function(x) {
  if (x<0)
    return false
  if (x%10===0&&x!==0){
    return false
  }
  let revertedNumber = 0
  while(x>revertedNumber){
    revertedNumber = revertedNumber*10+x%10
    x=parseInt(x/10)
  }
  return x===revertedNumber || x === parseInt(revertedNumber/10)
};

console.log(isPalindrome3(123321))
