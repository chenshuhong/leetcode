Design a HashMap without using any built-in hash table libraries.

To be specific, your design should include these functions:

- `put(key, value)` : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
- `get(key)`: Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
- `remove(key)` : Remove the mapping for the value key if this map contains the mapping for the key.

> 不使用任何内建的哈希表库设计一个哈希映射
>
> 具体地说，你的设计应该包含以下的功能
>
> - `put(key, value)`：向哈希映射中插入(键,值)的数值对。如果键对应的值已经存在，更新这个值。
> - `get(key)`：返回给定的键所对应的值，如果映射中不包含这个键，返回-1。
> - `remove(key)`：如果映射中存在这个键，删除这个数值对。

**Example:**

```
MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);          
hashMap.put(2, 2);         
hashMap.get(1);            // returns 1
hashMap.get(3);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
hashMap.get(2);            // returns 1 
hashMap.remove(2);          // remove the mapping for 2
hashMap.get(2);            // returns -1 (not found) 
```


**Note:**

- All keys and values will be in the range of `[0, 1000000]`.
- The number of operations will be in the range of `[1, 10000]`.
- Please do not use the built-in HashMap library.

跟705差不多，不过要用个二维数组辅助存储下

```js
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

```

