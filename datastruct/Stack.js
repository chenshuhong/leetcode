class Stack{
  constructor(){
    this.array = []
  }
  
  //入栈
  push(item){
    this.array.push(item)
  }
  
  //出栈
  pop(){
    return this.array.pop()
  }
  
  isEmpty(){
    return this.array.length === 0
  }
  
  length(){
    return this.array.length
  }
  
  top(){
    if (this.isEmpty()){
      return null
    }
    return this.array[this.array.length-1]
  }
}

module.exports = Stack
