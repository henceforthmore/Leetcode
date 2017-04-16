// Source : https://oj.leetcode.com/problems/length-of-last-word/
// Author : yuxinwang
// Date   : 2017-3-22

/**********************************************************************************************
*
*Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses. 
*
*For example, given n = 3, a solution set is: 
*
*[
* "((()))",
* "(()())",
* "(())()",
* "()(())",
* "()()()"
*]
*
*
************************************************************************************************/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
      var strArr = [];
      
    function bfs(str, left, right) {
        
        if(left>right){
            return ;
        }
        
        if(left>0){
            bfs(str+'(',left-1,right);
        }
        if(right>0){
            bfs(str+')',left,right-1);
        }
        if(left === 0 && right === 0){
           
         strArr.push(str);
          return ;
        }
       
    }
    
     bfs('',n,n);
     return strArr; 
    
};

    