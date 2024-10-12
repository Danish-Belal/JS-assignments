
const fs = require('fs');


const msg = "Hii I am writing this from file."
fs.writeFile('./file.txt', msg ,()=>{
     console.log("Data has written");
     
})
     
     
