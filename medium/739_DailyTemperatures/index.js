let Stack = require('../../datastruct/Stack')
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
  if (!T[0]){
    return []
  }
  let resultArray = []
  let stack = new Stack()
  stack.push([0,T[0]])
  for (let i=1,length = T.length;i<length;i++){
    while (!stack.isEmpty()&&T[i]>stack.top()[1]) {
      let index = stack.pop()[0]
      resultArray[index] = i-index
    }
    stack.push([i,T[i]])
  }
  while (!stack.isEmpty()) {
    let index = stack.pop()[0]
    resultArray[index] = 0
  }
  return resultArray
};
