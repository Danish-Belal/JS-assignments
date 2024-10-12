// Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)
let counter = 0;
function count(){
     let whenToStorp = setTimeout(()=>{
          console.log(counter);
          counter++;
          if(counter == 11){
               clearInterval(whenToStorp)
               
          }
          count()
     },1000)
}

count();