Design a HashSet without using any built-in hash table libraries.

To be specific, your design should include these functions:

- `add(value)`: Insert a value into the HashSet. 
- `contains(value)` : Return whether the value exists in the HashSet or not.
- `remove(value)`: Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.

> 不使用任何内建的哈希表库设计一个哈希集合
>
> 具体地说，你的设计应该包含以下的功能
>
> - `add(value)`：向哈希集合中插入一个值。
> - `contains(value)` ：返回哈希集合中是否存在这个值。
> - `remove(value)`：将给定值从哈希集合中删除。如果哈希集合中没有这个值，什么也不做。

**Example:**

```
MyHashSet hashSet = new MyHashSet();
hashSet.add(1);         
hashSet.add(2);         
hashSet.contains(1);    // returns true
hashSet.contains(3);    // returns false (not found)
hashSet.add(2);          
hashSet.contains(2);    // returns true
hashSet.remove(2);          
hashSet.contains(2);    // returns false (already removed)
```


**Note:**

- All values will be in the range of `[0, 1000000]`.
- The number of operations will be in the range of `[1, 10000]`.
- Please do not use the built-in HashSet library.

注意，要理解hash表的原理，不要用内建map

```js
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

```

