
const pannelColor = [
     {"id": 1,
     "colour" : "red"
     },
     {"id": 2,
     "colour" : "green"
     },
]
const pannel = document.getElementById('pannel');
function setColor(colour){
     document.body.style.backgroundColor = colour
}

function createColor(colour){
     id = pannelColor.length+1;
     pannelColor.push({id, colour})
     
}


function displayingPannel(){

// console.log(pannel);

pannelColor.forEach((color)=>{
     
     const container = document.createElement('div');
     container.style.width = '30px';
     container.style.height = '20px';
     container.style.backgroundColor = color.colour;

     pannel.appendChild(container);
     console.log(pannel);
     
})
}
displayingPannel()