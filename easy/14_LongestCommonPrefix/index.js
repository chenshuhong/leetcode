/**
 * @param {string} s
 * @return {number}
 */
let romanSpecCouple = {
  'IV': 'IIII',
  'IX': 'VIIII',
  'XL': 'XXXX',
  'XC': 'LXXXX',
  'CD': 'CCCC',
  'CM': 'DCCCC'
}
let romanIntCouple = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}
var romanToInt1 = function(s) {
  s=s.replace(/(IV|IX|XL|XC|CD|CM)/g,function(match){
    return romanSpecCouple[match]
  })
  let result = s.split('').reduce((pre,cur)=>{
    return pre+romanIntCouple[cur]
  },0)
  return result
};

var romanToInt2 = function(s) {
  let result = s.split('').reduce((pre,cur,index,array)=>{
    if (array[index+1]&&romanIntCouple[cur]<romanIntCouple[array[index+1]]){
      return pre-romanIntCouple[cur]
    }
    return pre+romanIntCouple[cur]
  },0)
  return result
};

console.log(romanToInt2('XLIV'))
console.log(romanToInt1('XLIV'))

module.exports = {
  sum1:romanToInt1,
}
