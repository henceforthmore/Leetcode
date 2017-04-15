// Source : https://oj.leetcode.com/problems/length-of-last-word/
// Author : yuxinwang
// Date   : 2017-

/*********************************************************************************************
*
*Given a roman numeral, convert it to an integer.
*
*Input is guaranteed to be within the range from 1 to 3999.
*
*
*
*
***********************************************************************************************/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var romanTable = {
        'I': 1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
        
    };
    var result = 0;
    for(var i=0;i<s.length;i++){
        if(i<s.length&&romanTable[s[i]]<romanTable[s[i+1]]){
            result -= romanTable[s[i]];
        }
        else
        result += romanTable[s[i]];
    }
    return result;
};