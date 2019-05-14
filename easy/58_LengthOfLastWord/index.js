/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.trim()
  if (!s){
    return 0
  }
  for (let length = s.length,i=length-1;i>=0;i--){
    let chatCode = s.charCodeAt(i)
    if (!((chatCode>=97&&chatCode<=122)||(chatCode>=65&&chatCode<=90))){
      return length-1-i
    }
  }
  return s.length
};

console.log(lengthOfLastWord('hello dd world ddd'))
