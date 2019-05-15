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

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr2 = function(haystack, needle) {
  if (!needle||haystack === needle)
    return 0
  let hashTemps = []
  let firstTempHash = 0
  let needleHash = 0
  let nLength = needle.length
  let hLength = haystack.length-nLength+1
  for (let i=0;i<nLength;i++){
    firstTempHash+=charCode(haystack,i)
    needleHash+=charCode(needle,i)
  }
  hashTemps.push(firstTempHash)
  for (let i=1;i<hLength;i++){
    hashTemps.push(hashTemps[i-1]-charCode(haystack,i-1)+charCode(haystack,i+nLength-1))
  }
  for (let i=0,length = hashTemps.length;i<length;i++){
    if (hashTemps[i]===needleHash){
      for (let j=0;j<nLength;j++){
        if (haystack[i+j]!==needle[j]) {
          break
        }else if (j===nLength-1){
          return i
        }
      }
    }
  }
  return -1
};

function charCode(s,i){
  return s.charCodeAt(i) - 65
}

console.log(strStr2('hello','el'))
