/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
     constructor(){
          this.result = 0;
     }
     add(b){
          this.result = this.result+b;
     }
     subtract(a){
          this.result = this.result-a;
     }
     multiply(a){
          this.result = this.result*a;
     }
     divide(a){
          this.result = this.result/a;
     }
     clear(){
          this.result = 0;
     }
     getResult(){
          return this.result;
     }
     calculate(expression){
     
          let cleanedExpression = expression.replace(/\s+/g, '');
          console.log(cleanedExpression);
          
          // Check if the expression is valid
          const isValidExpression = /^[0-9+\-*/(){}\[\].]+$/.test(cleanedExpression);
          if (!isValidExpression) {
               throw new Error("Invalid expression.");
          }
    
          // Check if braces, parentheses, and brackets are balanced
          if (!this.areBracesBalanced(cleanedExpression)) {
               throw new Error("Unbalanced parentheses or braces.");
          }

          // Evaluate the cleaned expression
           this.result = this.evaluateExpression(cleanedExpression);
     }

      areBracesBalanced(expression) {
          const stack = [];
          const braces = {
              '(': ')',
              '{': '}',
              '[': ']'
          };
      
          for (let char of expression) {
              if (braces[char]) {
                  stack.push(char);  // Opening brace
              } else if (Object.values(braces).includes(char)) {
                  const lastBrace = stack.pop();
                  if (braces[lastBrace] !== char) {
                      return false;  // Braces are not balanced
                  }
              }
          }
      
          return stack.length === 0;  // Return true if no unmatched braces
      }
      
      // Safely evaluate the mathematical expression
      evaluateExpression(expression) {
          try {
              // You can replace eval with a math library like math.js for safety
              return eval(expression);
          } catch (err) {
               console.log(err);
               
              throw new Error("Error evaluating expression.");
          }
      }
     
}

let data = new Calculator();
// data.add(5);
// console.log(data.result);
// data.clear();
// console.log(data.result);


let res = data.calculate(`10 +   2 *    (     6      -     (   4     +    1   )    /     2   )+ 7      `);
// let res = data.calculate(`[{3 * (2 + 1)} + (4 * {2 - 1})] * 5`);

console.log(data.result);

// data.calculate(`nan`);