/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle)
    return 0
  let nLength = needle.length
  let hLength = haystack.length-nLength+1
  for (let i=0;i<hLength;i++){
    for (let j=0;j<nLength;j++){
      if (haystack[i+j]!==needle[j]) {
        break
      }else if (j===nLength-1){
        return i
      }
    }
  }
  return -1
};

console.log(strStr('hello','el'))
