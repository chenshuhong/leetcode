/*class Queue{
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
}*/

function Queue(){
  this.array = []
}

Queue.prototype.push = function(item){
  this.array.push(item)
}

//出队
Queue.prototype.pop = function(){
  return this.array.shift()
}

Queue.prototype.isEmpty = function(){
  return this.array.length === 0
}

Queue.prototype.length = function(){
  return this.array.length
}

Queue.prototype.head = function(){
  if (this.isEmpty()){
    return null
  }
  return this.array[0]
}

module.exports = Queue
