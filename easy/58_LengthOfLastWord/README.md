Given a string *s* consists of upper/lower-case alphabets and empty space characters `' '`, return the length of last word in the string.

If the last word does not exist, return 0.

**Note:** A word is defined as a character sequence consists of non-space characters only.

**Example:**

```
Input: "Hello World"
Output: 5
```

先把字符串去除前后空格，然后从后遍历，找到非英文单词，当没找到时染回字符串长度

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.trim()
  if (!s){
    return 0
  }
  for (let length = s.length,i=length-1;i>=0;i--){
    let chatCode = s.charCodeAt(i)
    if (!((chatCode>=97&&chatCode<=122)||(chatCode>=65&&chatCode<=90))){
      return length-1-i
    }
  }
  return s.length
};
```

