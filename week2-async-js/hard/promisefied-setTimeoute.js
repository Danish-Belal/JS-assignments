/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

 function wait(n) {

     let promise =  new Promise((resolve)=>{
          setTimeout(async ()=>{
               let data = await fetch('https://api.github.com/users/Danish-Belal');
               data = await data.json();
               resolve(data);
          },n)
     })
     return promise;
          
     
     
}

let fun = wait(2000)
fun.then((data) =>{

     console.log(data);
})

// fun.then(data) {
//      console.log('Inside then', data);
// }

