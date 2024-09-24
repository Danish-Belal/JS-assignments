/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

     let p1 = 0, p2 = str2.length-1;
     console.log(p1, p2);
     
     while(p1<=p2){
          console.log(str1.charAt(p1));
          console.log(str2.charAt(p2));
          
          if(str1.charAt(p1) != str2.charAt(p2)) return false;
          p1++, p2--;
     }
     return true;

}

// module.exports = isAnagram;
console.log(isAnagram("anna", "anna"));