// Source : https://oj.leetcode.com/problems/length-of-last-word/
// Author : yuxinwang
// Date   : 2017-3-21

/*********************************************************************************************
*
*Given a non negative integer number num. 
*
*For every numbers i in the range 0 ≤ i ≤ num 
*
*calculate the number of 1's in their binary representation and return them as an array. 
*
*Example:
*
*For num = 5 you should return [0,1,1,2,1,2]. 
*
*Follow up: 
*
*It is very easy to come up with a solution with run time O(n*sizeof(integer)). 
*
*But can you do it in linear time O(n) /possibly in a single pass?
*
*Space complexity should be O(n).
*
*Can you do it like a boss? 
*
*Do it without using any builtin function like __builtin_popcount in c++ or in any other language？
*
*
*
***********************************************************************************************/


/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var result=[];
    var binaryNums=0;
    function countNum(n){
        var count = 0;
        for(var m = 0;m<n.length;m++){
            if(n[m]==='1'){
               count+=1; 
            }
        }
            return count;
        
    }
    for(var i = 0;i<=num;i++){
    binaryNums = i.toString(2);
    result.push(countNum(binaryNums));
    
    }
    return result;
     
};