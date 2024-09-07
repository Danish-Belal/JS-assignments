
let car = {
     "name" : "Thar",
     "brand" : "Mahindra"
}

let carDescription = function(...date){
     console.log(`I bought ${this.brand} ${this.name} on ${date[0]}. it cost me around ${date[1]}`);
     
};

let bindFun = carDescription.bind(car);

// Pass the date and price as arguments
bindFun("2024-09-08",  3000);


// Own generic function

Function.prototype.myBind = function(...data){
     let functionObj = this;
     
     
     let params = data.splice(1)  // take all as data but letf first

     return function(){
          console.log(data[0]);
          
          functionObj.apply(data[0],params)
     }
}

var myBindFun = carDescription.myBind(car, "2024-09-08",  5000)
myBindFun();

