
const obj1 = {
     "name" : "Danish",
     "pos" : "sde",
     "my address" : {
          "state" : "wb",
          "city" : "Kolkatta",
          "pin" : 700119
     }
}

// Aasign method
// const clone = {}
//  Object.assign(clone , obj1)
// // clone.address["city"] = "Mumbai"
// console.log(obj1);

// Sperade operator

// const clone2 = {...obj1}
// clone2.address.pin= 989812
// console.log(clone2);

// console.log(obj1.address.pin);


// Deep cloning of an Object.

 function cloning(cloned , obj) {
     
     for(let key in obj){
          if(typeof obj[key] === 'object' && obj[key] !=null){
               console.log("True", key);
               cloned[key] = Array.isArray(obj[key]) ? []:{}
               cloning(cloned[key] , obj[key])
          }else{
               cloned[key] = obj[key]
          }
          
     }
     
}


const deepClone = {}
 cloning(deepClone, obj1);
//  console.log(obj1);
 console.log(deepClone);

 console.log("After ------->");

 deepClone['my address']['city'] = "delhi"

 console.log(obj1);
 console.log(deepClone);
 
 



