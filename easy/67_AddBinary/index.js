/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let longArray,shortArray,resultArray=[]
  if (a.length>b.length){
    longArray = a.split('').reverse()
    shortArray = b.split('').reverse()
  } else {
    longArray = b.split('').reverse()
    shortArray = a.split('').reverse()
  }
  let needPush = longArray.reduce((pre,cur,index,array)=>{
    let result = +cur+pre+(+shortArray[index]||0)
    resultArray.push(result%2)
    return result>=2?1:0
  },0)
  if (needPush){
    resultArray.push(1)
  }
  return resultArray.reverse().join('')
};

console.log(addBinary('1111','1111'))
