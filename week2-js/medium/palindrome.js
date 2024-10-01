/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
     let i = 0, j= str.length;str 
    str = str.toLowerCase();
    console.log(str);
    
     while(i<j){
          if(str[i] != str[j]) return false;
          i++,j--;
     }
     return true;
   }
   
   console.log(isPalindrome('Nan'));
   
//    module.exports = isPalindrome;