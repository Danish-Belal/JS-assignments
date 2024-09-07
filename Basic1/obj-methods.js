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


function welcome2(){
     console.log(`${this.firstName} ${this.lastName}`);
}

const obj3 = {
     "firstName": "Tabrej",
     "lastName" : "Alam"
}
const obj4 = {
     "firstName": "Zishan",
     "lastName" : "Jawed"
}

welcome2.call(obj3, "Laiba");   // if fun is in windown obj, then with any window obj it can be called. if fun take some extra val we can pass them too.
welcome2.call(obj4);     // We can call both obj3 and obj4

