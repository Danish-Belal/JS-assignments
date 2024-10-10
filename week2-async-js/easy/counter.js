// Create a counter in JavaScript
// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript It should go up as time goes by in intervals of 1 second


let count =0 ;
function counter(){
     var whenToStop = setInterval(() => {
          console.log(count);
          count++;

          if(count == 11){
               clearInterval(whenToStop);
               console.log("Interval stopped");
               console.log(whenToStop);
               
          }
     }, 1000);
     console.log(whenToStop);
     
     
}
console.log("Goin to call the counter");

counter();