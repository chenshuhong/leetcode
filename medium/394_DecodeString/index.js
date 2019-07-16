let Stack = require('../../datastruct/Stack')
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let stack = new Stack()
  for (let i=0,length = s.length;i<length;i++){
    console.log(s[i])
    if (s[i] === ']'){
    
    } else {
      stack.push(s[i])
    }
  }
};
