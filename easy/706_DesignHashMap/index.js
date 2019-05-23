/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
  this.set = []
};

function hash(key){
  return key%100
}

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  let hashKey = hash(key)
  let bucket = this.set[hashKey]
  if (bucket){
    let index = bucket[0].indexOf(key)
    if (index===-1) {
      bucket[0].push(key)
      bucket[1].push(value)
    }else {
      bucket[1][index] = value
    }
  } else {
    this.set[hashKey]=[[key],[value]]
  }
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  let hashKey = hash(key)
  let bucket = this.set[hashKey]
  if (bucket){
    let index = bucket[0].indexOf(key)
    if (index===-1) {
      return -1
    }else {
      return bucket[1][index]
    }
  } else {
    return -1
  }
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  let hashKey = hash(key)
  let bucket = this.set[hashKey]
  if (bucket){
    let index = bucket[0].indexOf(key)
    if (index!==-1) {
      bucket[0].splice(index,1)
      bucket[1].splice(index,1)
    }
  }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

var obj = new MyHashMap()
obj.put(1,2)
obj.put(2,3)
obj.put(2,4)
obj.remove(2)
obj.get(2)
console.log(obj.set)
console.log(obj.get(2))
