class Queue{
  constructor(){
    this.array = []
  }
  
  //入对
  push(item){
    this.array.push(item)
  }
  
  //出队
  pop(){
    return this.array.shift()
  }
  
  isEmpty(){
    return this.array.length === 0
  }
  
  length(){
    return this.array.length
  }
  
  head(){
    if (this.isEmpty()){
      return null
    }
    return this.array[0]
  }
}

module.exports = Queue
