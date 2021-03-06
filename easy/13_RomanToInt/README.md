Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

> 罗马数字用七种不同的符号表示:I、V、X、L、C、D和M。

```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

For example, two is written as `II` in Roman numeral, just two one's added together. Twelve is written as, `XII`, which is simply `X` + `II`. The number twenty seven is written as `XXVII`, which is `XX` + `V` + `II`.

> 2在罗马数字里用II表示，即两个I相加。12是XII，即X+II，27是XXVII，即XX+V+II

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9. 
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90. 
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

> 罗马数字通常是从左到右书按从大到小的顺序书写。然而，4不是IIII。 而是IV，1在5前面，即5-1。同样的规则适用于9，IX.使用减法的有六个实例：
>
> - IV表示4，IX表示9
> - XL表示50，XC表示90
> - CD表示500，CM表示900
>
> 给定一个罗马数字，把他转换成十进制整数，输入范围再1-3999

**Example 1:**

```
Input: "III"
Output: 3
```

**Example 2:**

```
Input: "IV"
Output: 4
```

**Example 3:**

```
Input: "IX"
Output: 9
```

**Example 4:**

```
Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
```

**Example 5:**

```
Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

第一版：利用replace先把特殊的规则转换成同一的规则然后利用reduce累加值

```js
let romanSpecCouple = {
  'IV': 'IIII',
  'IX': 'VIIII',
  'XL': 'XXXX',
  'XC': 'LXXXX',
  'CD': 'CCCC',
  'CM': 'DCCCC'
}
let romanIntCouple = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}
var romanToInt1 = function(s) {
  s=s.replace(/(IV|IX|XL|XC|CD|CM)/g,function(match){
    return romanSpecCouple[match]
  })
  let result = s.split('').reduce((pre,cur)=>{
    return pre+romanIntCouple[cur]
  },0)
  return result
};
```

第二版：如果特殊规则太多，那的确不太好。其实特殊规则也有个规则，就是第一位比下一位还小，利用他我们直接reduce里处理，而且不用正则处理，速度更快

```js
var romanToInt = function(s) {
  let result = s.split('').reduce((pre,cur,index,array)=>{
    if (array[index+1]&&romanIntCouple[cur]<romanIntCouple[array[index+1]]){
      return pre-romanIntCouple[cur]
    }
    return pre+romanIntCouple[cur]
  },0)
  return result
};
```

