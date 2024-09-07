const obj1 = {
     "name" : "Danish",
     "pos" : "sde",
     "my address" : {
          "state" : "wb",
          "city" : "Kolkatta",
          "pin" : 700119
     },
      welcome(){
          console.log(`Welcome ${this.name}`);
          
     }
}

obj1.welcome();


// call method.
// Now suppose some other obj want to use this obj1 welcome function so it will use call method.

let obj2 = {
     "name": "Belal",
     "pos" : "SRE"
}

obj1.welcome.call(obj2)  // Call method.
