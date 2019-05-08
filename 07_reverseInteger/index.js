let maxValue = 0x7fffffff
let minValue = -0x80000000
let limitMaxValue = parseInt(0x7fffffff/10)
let limitMinValue = parseInt(-0x80000000/10)
console.log(maxValue,limitMaxValue,limitMinValue)

/**
 * @param {number} x
 * @return {number}
 */
var reverse1 = function(x) {
  let isPositive = x<0?-1:1
  let xArray = Math.abs(x).toString().split('')
  xArray.reverse()
  x = xArray.join('')*isPositive
  if (x>=minValue&&x<=maxValue){
    return x
  }
  return 0
};

/**
 * @param {number} x
 * @return {number}
 */
var reverse2 = function(x) {
  let rev = 0
  let pop = 0
  while (x!==0){
    pop = x%10
    x = parseInt(x/10)
    if (rev>limitMaxValue||(rev===limitMaxValue&&pop>7))
      return 0
    if (rev<limitMinValue||(rev===limitMaxValue&&pop<-8))
      return 0
    rev = rev*10+pop
  }
  return rev
};

console.log(reverse2(8463847412))

module.exports = {
  reverse1,
}
