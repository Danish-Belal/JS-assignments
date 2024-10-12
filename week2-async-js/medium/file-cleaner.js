// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was

// hello     world    my    name   is       raman
// After the program runs, the output should be

// hello world my name is raman

const fs = require('fs')

var innterText = "";
const cleaner = async()=>{

     try{
          fs.readFile('../file.txt', 'utf-8', (err,data)=>{
               if(err){
                    console.log('An error occured while reading',err);
                    return null;
               }else{
                    console.log(data);
                    innterText = data;
                    data = data.replace(/\s+/g, ' ')
                    console.log(data);
                    try {
                         fs.writeFile('../file.txt' , data, ()=>{
                              console.log('Msg written succesfully');
                              
                         })
                    } catch (error) {
                         
                    }
                    
               }
          })

     }catch(e){
          console.log("An error occured",e);
          
     }
}

// console.log("Inner text before Reading", innterText);
cleaner();
// console.log("Inner text after Reading", innterText);
