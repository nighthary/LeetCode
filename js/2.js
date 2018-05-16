/**
  给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。

  你可以假设除了数字 0 之外，这两个数字都不会以零开头。

  示例：

  输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
  输出：7 -> 0 -> 8
  原因：342 + 465 = 807
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (!l1 || !l2) return 0;
  
  let str1 = '', str2 = '';
  while(l1 && l1.val !== undefined){
    const t1 = l1.val;
    str1 += t1;
    l1 = l1.next;
  }

  while(l2 && l2.val !== undefined){
    const t2 = l2.val;
    str2 += t2;
    l2 = l2.next;
  }

  str1 = str1 || '0';
  str2 = str2 || '0';

  str1 = str1.split('').reverse().join('');
  str2 = str2.split('').reverse().join('');
    
  var arr = (sumStrings(str1, str2) + '').split('').reverse();
  return arr.map(v => parseInt(v));
};

function sumStrings(a,b){
  var res='', c=0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c){
      c += ~~a.pop() + ~~b.pop();
      res = c % 10 + res;
      c = c>9;
  }
  return res.replace(/^0+/,'') || 0;
}