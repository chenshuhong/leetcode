/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x<0)
    return false
  let xArray = x.toString().split('')
  xArray.reverse()
  let palindromeX=+xArray.join('')
  return x === palindromeX
};

console.log(isPalindrome(123211))
