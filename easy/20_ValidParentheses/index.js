let Stack = require('../../datastruct/Stack')
/**
 * @param {string} s
 * @return {boolean}
 */
let map = {
  '(':')',
  '{':'}',
  '[':']'
}
var isValid = function(s) {
  let stack = new Stack()
  for(let i=0,length = s.length;i<length;i++){
    let char = s[i]
    if (Object.keys(map).indexOf(char)!==-1){
      stack.push(char)
    } else if (Object.values(map).indexOf(char)!==-1){
      let stackTop = stack.top()
      if (map[stackTop]===char){
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.isEmpty()
};

console.log(isValid('[{}())]'))
