/**
   给定一个字符串，找出不含有重复字符的最长子串的长度。

    示例：

    给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。

    给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。

    给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列  而不是子串。
 */


 /**
  * 定义两个游标，依次向后查找 O(n*n)
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0, cursor = 0, start = 0, result = '';
    const len = s.length || 0;

    let end = false, str = '';
    while(start <= len){
      var nowChar = s.slice(cursor, cursor + 1);
      if(str.indexOf(nowChar) > -1){
        start++;
        cursor = start;
        max = str.length > max ? str.length : max;
        if(str.length >= max){
          result = str;
        }
        str = '';
        
      } else {
        str += s.substr(cursor, 1);
        cursor++;
      }
    }
    return max;
};

var lengthOfLongestSubstring2 = function(s) {
  let start = 0, end = 0, max = 0;

  let len = s.length, index = 0;
  while (end < len) {
      // indexof(searchvalue, fromIndex)
      index = s.indexOf(s[end], start);
      if (index !== -1 && index < end) {
          start = index + 1;
      }
      max = Math.max(end - start + 1, max);
      if (len - start <= max) {
          break;
      }
      end++;
  }
  return max;
};

console.log(lengthOfLongestSubstring2('sd123b'));