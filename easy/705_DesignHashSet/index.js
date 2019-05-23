/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  this.set = []
};

function hash(key){
  return key%100
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  let hashKey = hash(key)
  if (this.set[hashKey]){
    if (this.set[hashKey].indexOf(key)==-1) {
      this.set[hashKey].push(key)
    }
  } else {
    this.set[hashKey]=[key]
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  let bucket = this.set[hash(key)]
  if (bucket){
    let removeIndex = bucket.indexOf(key)
    if (removeIndex!==-1){
      bucket.splice(removeIndex,1)
    }
  }
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  let bucket = this.set[hash(key)]
  return bucket ? -1 !== bucket.indexOf(key) : false
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

var obj = new MyHashSet()
obj.add(1)
obj.add(2)
obj.add(2)
console.log(obj)
