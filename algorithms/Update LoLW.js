// Source : https://oj.leetcode.com/problems/length-of-last-word/
// Author : yuxinwang
// Date   : 2017-4-15

/*********************************************************************************************
*
*Given a string s consists of upper/lower-case alphabets and empty space characters ' ', 
*
*return the length of last word in the string.
*
*If the last word does not exist, return 0.
*
*Note: A word is defined as a character sequence consists of non-space characters only.
*
*For example:
*
*Given s = "Hello World",
*
*return 5. 
*
*
*
***********************************************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
 
var lengthOfLastWord = function(s) {
    var arr = s.match(/\S+/g)||0;
    return arr.pop().length;
   
};
