/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  let resultArray = []
  for (let i=0,length = T.length;i<length;i++){
    for (let j=i;j<length;j++){
      if (T[i]<T[j]){
        resultArray[i] = j-i
        break
      }else if (j===length-1){
        resultArray[i] = 0
      }
    }
  }
  return resultArray
};

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures2 = function(T) {
  let resultArray = []
  
  return resultArray
};
