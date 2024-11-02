
import {pannelColor}  from "./colors.js";
// console.log("Pannel",pannelColor);


const pannel = document.getElementById('pannel');


function setColor(colour){
     document.body.style.backgroundColor = colour
}

function createColor(colour){
     console.log("Color in createColor", colour);

    // Set the new id based on the current length of pannelColor
    const id = pannelColor.length + 1;
    pannelColor.push({ id, colour });
    
    // Store the updated pannelColor array in localStorage
    localStorage.setItem('pannelColor', JSON.stringify(pannelColor));
    
    console.log('Pannel Color after adding', pannelColor);
    displayingPannel();
    const box = document.getElementById('box');
    console.log('BOX', box);
    
    document.body.removeChild(box)
         
}

function addColor(){
     console.log('Adding color has clicked');

     const box = document.createElement('div')
     box.id= 'box';
     box.style.display= true;
     box.style.width='40px'
     box.style.height='40px'
     
     const intputBox = document.createElement('input')
     intputBox.type= 'text';
     box.appendChild(intputBox);

     const button = document.createElement('button')
     button.innerText= 'Submit'
     box.appendChild(button)

     box.style.backgroundColor= 'red'
     
     document.body.appendChild(box)
     
     button.addEventListener('click', ()=>{
          console.log("Button Clicked");
          const color = intputBox.value
          //  intputBox.onchange(color= );
         
          if(color.length>  3){
               console.log("SELECTED COLOR", color);
               createColor(color)
               
          }
          
     })
     
}
function displayingPannel(){
// console.log(pannel);
pannel.innerHTML = ''; // Clear previous buttons

     pannelColor.forEach((color)=>{
          
          const container = document.createElement('button');
          container.style.width = '50px';
          container.style.height = '30px';
          
          container.style.borderRadius='5px'
          container.style.backgroundColor = color.colour;
          container.innerText = color.colour

          container.addEventListener('click', ()=>setColor(color.colour))
          pannel.appendChild(container);
             
     })
}


     displayingPannel();


// Expose addColor to global scope so HTML can access it
window.addColor = addColor;

