/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length){
    return ''
  }
  let minLength=Number.MAX_SAFE_INTEGER
  //求得字符串数组中最小长度
  strs.map(str=>{
    if (minLength>str.length){
      minLength=str.length
    }
  })
  
  for (let i=0;i<minLength;i++){
    for (let j=1,length=strs.length;j<length;j++){
      if (strs[0][i]!==strs[j][i]){
        return i===0?'':strs[0].substr(0,i);
      }
    }
  }
  return strs[0].substr(0,minLength)
};


console.log(longestCommonPrefix(['flow','flower','fly']))
