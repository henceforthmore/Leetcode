// Source : https://oj.leetcode.com/problems/length-of-last-word/
// Author : yuxinwang
// Date   : 2017-3-22

/**********************************************************************************************
*
*Given an integer, convert it to a roman numeral. 
*
*Input is guaranteed to be within the range from 1 to 3999.
*
*
*
************************************************************************************************/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var numsArray = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var romanArray = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    var result = '';
    for(var i=0;i<numsArray.length;++i){
        for(;num>=numsArray[i];){
            num -= numsArray[i];
            result += romanArray[i];
        }
    }     
    return result;
         

};
