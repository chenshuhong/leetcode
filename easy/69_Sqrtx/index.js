/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x==0||x==1){
    return x
  }
  let left = 0,right = parseInt(x/2)+1,mid = parseInt((left+right)/2)
  while (left!==mid){
    let multi = mid *mid
    if (multi>x){
      right = mid
      mid = parseInt((left+right)/2)
    } else if (multi<x) {
      left = mid
      mid = parseInt((left+right)/2)
    } else {
      return mid
    }
  }
  return left
};

console.log(mySqrt(3))
