Implement [strStr()](http://www.cplusplus.com/reference/cstring/strstr/).

Return the index of the first occurrence of needle in haystack, or **-1** if needle is not part of haystack.

**Example 1:**

```
Input: haystack = "hello", needle = "ll"
Output: 2
```

**Example 2:**

```
Input: haystack = "aaaaa", needle = "bba"
Output: -1
```

**Clarification:**

What should we return when `needle` is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when `needle` is an empty string. This is consistent to C's [strstr()](http://www.cplusplus.com/reference/cstring/strstr/) and Java's [indexOf()](https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#indexOf(java.lang.String)).

这道题其实就是字符串匹配，先了解两个概念，**主串**和**模式串**，我们在字符串A中查找字符串B，其中字符串A就是主串，字符串B就是模式串。主串A的长度为n，模式串B的长度为m，n>=m

## BF算法

BF，即Brute Force，暴力搜索算法，简单暴力，在主串中会有n-m+1个长度为m的子串，我们只需要暴力地对比这n-m+1个子串与模式串，就可以找出主串与模式串匹配的子串，复杂度为O(n*m),不过这也是最坏条件，一般情况下执行效率比这高很多，因为，比对过程中发现不一样即开启下一轮比对

```js
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle)
    return 0
  let nLength = needle.length
  let hLength = haystack.length-nLength
  for (let i=0;i<hLength;i++){
    for (let j=0;j<nLength;j++){
      if (haystack[i+j]!==needle[j]) {
        break
      }else if (j===nLength-1){
        return i
      }
    }
  }
  return -1
};
```

## RK算法

RK算法的全称叫Rabin-Karp算法，是由它的两位发明者Rabin和Karp的名字来命名的。

RK算法的思路是这样的：我们通过哈希算法对主串中的n-m+1个子串分别求哈希值，然后逐个与模式串的哈希值比较大小。如果某个子串的哈希值与模式串相等，那就说明对应的子串和模式串匹配了。因为哈希值是一个数字，数字之间比较是否相等是非常快速的，所以模式串和子串比较的效率就提高了。 

如果分别对n-m+1个子串遍历求哈希值，发现复杂度还是挺高的，如果能找到每个相邻子串的哈希值规律，就能显著提高效率。

由于两个相邻子串只有头尾不一样，利用这个规律可以快速求得所有子串哈希，这里的哈希函数我们简单用对应单词的charcode值相加，这种容易哈希冲突，所以当哈希一样还要遍历下主串和模式串

```js
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr2 = function(haystack, needle) {
  if (!needle||haystack === needle)
    return 0
  let hashTemps = []
  let firstTempHash = 0
  let needleHash = 0
  let nLength = needle.length
  let hLength = haystack.length-nLength+1
  for (let i=0;i<nLength;i++){
    firstTempHash+=charCode(haystack,i)
    needleHash+=charCode(needle,i)
  }
  hashTemps.push(firstTempHash)
  for (let i=1;i<hLength;i++){
    hashTemps.push(hashTemps[i-1]-charCode(haystack,i-1)+charCode(haystack,i+nLength-1))
  }
  for (let i=0,length = hashTemps.length;i<length;i++){
    if (hashTemps[i]===needleHash){
      for (let j=0;j<nLength;j++){
        if (haystack[i+j]!==needle[j]) {
          break
        }else if (j===nLength-1){
          return i
        }
      }
    }
  }
  return -1
};

function charCode(s,i){
  return s.charCodeAt(i) - 65
}
```





