let Stack = require('../../datastruct/Stack')
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let operators = ['+','-','*','/']
  let stack = new Stack()
  let result = 0
  for (let i=0,length = tokens.length;i<length;i++){
    let operator = tokens[i]
    if (operators.indexOf(operator)==-1){
      stack.push(operator)
    }else {
      let num1 = stack.pop()
      let num2 = stack.pop()
      result = operate(operator,num2,num1)
      stack.push(result)
    }
  }
  return stack.top()
};

function operate(operator,num1,num2){
  num1 = num1-0
  num2 = num2-0
  switch (operator) {
    case '+':
      return num1+num2
    case '-':
      return num1-num2
    case '*':
      return num1*num2
    case '/':
      return parseInt(num1/num2)
    default:
      return NaN
  }
}

console.log(evalRPN(["4","13","5","/","+"]))
