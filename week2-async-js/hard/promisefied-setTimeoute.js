/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

 function wait(n) {

     let promise =  new Promise((reject,resolve)=>{
          setTimeout(async ()=>{
               let data = await fetch('https://api.github.com/users/Danish-Belal');
               data = await data.json();
               if(data.status == 200){
                    resolve(data);
               }else{
                    console.log('Rejected');
                    reject(data)
               }
              
          },n)
     })
     return promise;
          
     
     
}

let fun = wait(2000)
fun.then((data) =>{
     console.log('Data retrived',data);
}).catch((data)=>{
     console.log('An Issue Occured', data);
     
})

