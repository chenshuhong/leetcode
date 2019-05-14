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

我们假设要匹配的字符串的字符集中只包含K个字符，我们可以用一个K进制数来表示一个子串，这个K进制数转化成十进制数，作为子串的哈希值。 比如要处理的字符串只包含a～z这26个小写字母，那我们就用二十六进制来表示一个字符串。我们把a～z这26个字符映射到0～25这26个数字， a就表示0， b就表示1，以此类推， z表示25。 

> cba = 2\*26\*26 + 1 \*26 + 0\*1

这种哈希算法有一个特点，在主串中，相邻两个子串的哈希值的计算公式有一定关系 。相邻两个子串s[i-1]和s[i]（i表示子串在主串中的起始位置，子串的长度都为m），对应的哈希值计算公式有交
集，也就是说，我们可以使用s[i-1]的哈希值很快的计算出s[i]的哈希值。 

