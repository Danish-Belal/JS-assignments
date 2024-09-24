/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

const arr = [2,5,4,2,4,6,3,2,3,5,67.7,3,4243.12,4243.23,65,34,23,223];
function findLargestElement(numbers) {
     let res  = numbers[0];
     for(let i = 1; i<numbers.length;i++){
          if(numbers[i] > res) res = numbers[i];
     }
    return res;
}

// module.exports = findLargestElement;
console.log(findLargestElement(arr));
