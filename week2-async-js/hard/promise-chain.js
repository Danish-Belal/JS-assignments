/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
     return new Promise((resolve)=>{
          setTimeout(resolve, t);
     })

}

function wait2(t) {
     return new Promise((resolve)=>{
          setTimeout(resolve, t);
     })

}

function wait3(t) {
     return new Promise((resolve)=>{
          setTimeout(resolve, t);
     })

}

async function calculateTime(t1, t2, t3) {
     const startTime = Date.now();
     console.log('Start time', startTime);
     
     await wait1(t1*1000);
     await wait2(t2*1000);
     await wait3(t3*1000);

     const endTime = Date.now()-startTime;
     console.log('EndTime', endTime);
     return endTime;
     

}

const time  = calculateTime(0,0,0).then((endTime)=>{
     console.log('Totla Time' , endTime);
     
});
