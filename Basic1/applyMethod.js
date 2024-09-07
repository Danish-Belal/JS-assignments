const obj1 = {
     "name" : "Danish",
     "pos" : "sde",
     "my address" : {
          "state" : "wb",
          "city" : "Kolkatta",
          "pin" : 700119
     },
      
}

// apply method is as same as call methid but extra argument is passed in form of array

function welcome2(...data){
     console.log(`${this.name} ${this.pos}, ${data[0]} ${data[1]}`);
}

welcome2.call(obj1,  'danish@gmail.com', 100);

// Bind Method  , sand as call method but it create a copy of obj, so after if you chng obj, bin will not chnf
let user ={
     "firstName" : "Mota"

}

function fun(){
     console.log(`${this.firstName}`);
     
}

let bindFun = fun.bind(user);

user = {
     "a" : 10
}
bindFun();